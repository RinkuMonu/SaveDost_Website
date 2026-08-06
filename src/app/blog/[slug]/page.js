import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import axios from "axios";
import { Calendar, User, Tag, ArrowLeft, TrendingUp, Clock, Folder } from "lucide-react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

import seoConfig from "@/app/seoConfig";
import { getSampleBlog, sampleBlogs } from "@/data/sampleBlogs";

// API Configuration
const API_BASE_URL = "https://cms.sevenunique.com/apis";
const API_HEADERS = {
  Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
};

// Fetch single blog post by slug
async function getBlogBySlug(slug) {
  const sampleBlog = getSampleBlog(slug);
  if (sampleBlog) return sampleBlog;

  try {
    const res = await axios.get(
      `${API_BASE_URL}/blogs/get-blogs.php?website_id=6&status=2&limit=1000`,
      { headers: API_HEADERS }
    );

    const blogs = res.data?.data || [];
    // const blog = blogs.find((b) => b.slug === slug)
    const blog = blogs.find((b) => b.slug?.trim().toLowerCase() === slug?.trim().toLowerCase());
    if (!blog) return null;

    // Get category name if category_id exists
    let categoryName = "Uncategorized";
    if (blog.category_id) {
      const categoryRes = await axios.get(
        `${API_BASE_URL}/category/get_category_by_id.php?category_id=${blog.category_id}`,
        { headers: API_HEADERS }
      );
      categoryName = categoryRes.data?.data?.category_name || categoryName;
    }

    return {
      ...blog,
      categoryName,
      author: blog?.author || "Admin",
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sampleBlog = getSampleBlog(slug);

  if (sampleBlog) {
    return {
      title: `${sampleBlog.title} | SaveDost`,
      description: sampleBlog.short_description,
    };
  }

  const seo = await seoConfig(`/blog/${slug}`);
  if (!seo) {
    return {
      title: "Blog – SaveDost",
    };
  }

  return {
    title: seo.meta_title,
    description: seo.meta_description,

    openGraph: {
      title: seo.og_title || seo.meta_title,
      description: seo.og_description || seo.meta_description,
      images: seo.og_image ? [{ url: seo.og_image, width: 1200, height: 630 }] : [],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.twitter_title || seo.meta_title,
      description: seo.twitter_description || seo.meta_description,
      images: seo.twitter_image ? [seo.twitter_image] : [],
    },
  };
}

// Fetch all blogs for related posts
async function getAllBlogs() {
  try {
    const res = await axios.get(
      `${API_BASE_URL}/blogs/get-blogs.php?website_id=6&status=2&limit=1000`,
      { headers: API_HEADERS }
    );
    const remoteBlogs = res?.data?.data || [];
    const sampleSlugs = new Set(sampleBlogs.map((blog) => blog.slug));
    return [...sampleBlogs, ...remoteBlogs.filter((blog) => !sampleSlugs.has(blog.slug))];
  } catch {
    return sampleBlogs;
  }
}

// Get trending posts (based on is_trending flag)
async function getTrendingPosts() {
  try {
    const blogs = await getAllBlogs();
    return blogs
      .filter((blog) => blog.is_trending === 1)
      .slice(0, 5) // Limit to 5 trending posts
      .map((blog) => ({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        created_at: blog.created_at,
        image: blog.image,
        categoryName: "Loading...", // Will be populated if needed
      }));
  } catch {
    return [];
  }
}

// Get recent posts (sorted by created_at)
async function getRecentPosts() {
  try {
    const blogs = await getAllBlogs();
    return blogs
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 5) // Limit to 5 recent posts
      .map((blog) => ({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        created_at: blog.created_at,
        image: blog.image,
        categoryName: "Loading...",
      }));
  } catch {
    return [];
  }
}

// Get related posts (by same category)
async function getRelatedPosts(currentBlogSlug, categoryId) {
  try {
    const blogs = await getAllBlogs();

    return blogs
      .filter(
        (blog) =>
          blog.slug !== currentBlogSlug && // Exclude current blog
          (!categoryId || blog.category_id === categoryId) // Same category if available
      )
      .slice(0, 2) // Limit to 2 related posts
      .map((blog) => ({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        created_at: blog.created_at,
        image: blog.image,
        categoryName: "Loading...",
        author: blog.author || "Admin",
        description: blog.summary || "",
      }));
  } catch {
    return [];
  }
}

// Get categories with count
async function getCategories() {
  try {
    const blogs = await getAllBlogs();
    const categoryMap = {};

    // Fetch all categories first
    for (const blog of blogs) {
      if (blog.category_id) {
        try {
          const res = await axios.get(
            `${API_BASE_URL}/category/get_category_by_id.php?category_id=${blog.category_id}`,
            { headers: API_HEADERS }
          );
          const categoryName = res.data?.data?.category_name;
          if (categoryName) {
            categoryMap[categoryName] = (categoryMap[categoryName] || 0) + 1;
          }
        } catch {
          // Skip if category fetch fails
        }
      }
    }

    return categoryMap;
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const samplePost = getSampleBlog(slug);

  // Local sample articles do not depend on the external CMS.
  const [post, trendingPosts, recentPosts, relatedPosts, categories] = samplePost
    ? [
        samplePost,
        [],
        sampleBlogs.filter((blog) => blog.slug !== slug).slice(0, 3),
        sampleBlogs.filter((blog) => blog.slug !== slug).slice(0, 2),
        sampleBlogs.reduce((counts, blog) => {
          counts[blog.categoryName] = (counts[blog.categoryName] || 0) + 1;
          return counts;
        }, {}),
      ]
    : await Promise.all([
        getBlogBySlug(slug),
        getTrendingPosts(),
        getRecentPosts(),
        getRelatedPosts(slug),
        getCategories(),
      ]);

  // If post not found, show 404
  if (!post) {
    notFound();
  }

  // Update related posts with current post's category
  const relatedPostsWithCategory = samplePost
    ? relatedPosts
    : await Promise.all(
        relatedPosts?.map(async (related) => {
          if (related.id) {
            try {
              const res = await axios.get(
                `${API_BASE_URL}/category/get_category_by_id.php?category_id=${related.id}`,
                { headers: API_HEADERS }
              );
              return {
                ...related,
                categoryName: res.data?.data?.category_name || "Uncategorized",
              };
            } catch {
              return related;
            }
          }
          return related;
        })
      );

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[75vh]">
        <Image
          src={post?.image || "/placeholder-image.jpg"}
          alt={post?.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{post?.title}</h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {new Date(post?.created_at).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  {post?.author || "Admin"}
                </div>
                <div className="flex items-center">
                  <Tag className="mr-1 h-4 w-4" />
                  {post?.categoryName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-20 lg:px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="rounded-lg bg-white p-6 shadow-md lg:col-span-2">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center text-[#115d8e] hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <article
              className="prose prose-lg mb-12 max-w-none"
              dangerouslySetInnerHTML={{ __html: post?.content }}
            />

            {/* Share */}
            <div className="border-y border-gray-400 py-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="font-medium">Share this article</div>
                <div className="flex gap-2">
                  <Link
                    href=""
                    className="p-2 rounded-full border border-[#115D8E]/50 hover:bg-gray-100"
                  >
                    <FaFacebookF className="h-4 w-4 text-[#115D8E]" />
                  </Link>
                  <Link
                    href=""
                    className="p-2 rounded-full border border-[#115D8E]/50 hover:bg-gray-100"
                  >
                    <FaTwitter className="h-4 w-4 text-[#115D8E]" />
                  </Link>
                  <Link
                    href=""
                    className="p-2 rounded-full border border-[#115D8E]/50 hover:bg-gray-100"
                  >
                    <MdShare className="h-4 w-4 text-[#115D8E]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-10">
              <h2 className="mb-6 text-2xl font-bold">Related Articles</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {relatedPostsWithCategory?.map((related) => (
                  <div
                    key={related?.id}
                    className="group relative min-h-75 overflow-hidden rounded-2xl bg-white"
                  >
                    {/* image */}
                    <Image
                      src={related?.image || "/placeholder-image.jpg"}
                      alt={related?.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width:1024px) 25vw, 100vw"
                    />
                    {/* dark-to-transparent overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                    {/* content */}
                    <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white">
                      <div className="mb-2 flex items-center justify-between text-xs opacity-90">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-2.5 py-1 backdrop-blur">
                          <span className="inline-block h-2 w-2 rounded-full bg-sky-400"></span>
                          {related?.author}
                        </span>
                        <span>{new Date(related?.created_at).toLocaleDateString()}</span>
                      </div>

                      <h4 className="text-xl font-semibold leading-snug">{related?.title}</h4>
                      <p className="mt-2 line-clamp-2 text-white/80">{related?.description}</p>

                      <div className="mt-4">
                        <Link
                          href={`/blog/${related?.slug}`}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-900 transition hover:bg-white"
                        >
                          Read more <MdArrowOutward />
                        </Link>
                      </div>
                    </div>

                    {/* small shine */}
                    <span className="absolute top-0 left-0 h-full w-1/5 -translate-x-[60%] bg-white/10 opacity-0 blur-xl transition-all duration-900 group-hover:translate-x-[180%] group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* sticky wrapper */}
            <div className="sticky top-24 space-y-8">
              {/* Trending Posts */}
              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="flex items-center gap-2 font-semibold mb-4">
                  <TrendingUp className="h-5 w-5 text-[#115d8e]" /> Trending Posts
                </h3>
                <div className="space-y-4">
                  {trendingPosts?.map((trend, index) => (
                    <Link href={`/blog/${trend?.slug}`} key={trend?.id} className="flex gap-3">
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                        <Image
                          src={trend?.image || "/placeholder-image.jpg"}
                          alt={trend?.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-bold text-[#115d8e] bg-[#115d8e]/10 px-2 py-1 rounded">
                          #{index + 1}
                        </span>
                        <h4 className="text-sm font-medium line-clamp-2 mt-1">{trend?.title}</h4>
                        <p className="text-xs text-gray-500 mt-1 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(trend?.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="flex items-center gap-2 font-semibold mb-4">
                  <Clock className="h-5 w-5 text-[#115D8E]" /> Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts?.map((recent) => (
                    <Link href={`/blog/${recent?.slug}`} key={recent?.id} className="flex gap-3">
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                        <Image
                          src={recent?.image || "/placeholder-image.jpg"}
                          alt={recent?.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded mb-1">
                          {recent?.categoryName}
                        </span>
                        <h4 className="text-sm font-medium line-clamp-2">{recent?.title}</h4>
                        <p className="text-xs text-gray-500 mt-1 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(recent?.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="flex items-center gap-2 font-semibold mb-4">
                  <Folder className="h-5 w-5 text-[#115D8E]" /> Categories
                </h3>
                <div className="space-y-2">
                  {Object.entries(categories)
                    .sort(([, a], [, b]) => b - a)
                    .map(([category, count]) => (
                      <Link
                        key={category}
                        href={`/blog/category/${category.toLowerCase()}`}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition-colors group"
                      >
                        <span className="text-sm font-medium group-hover:text-[#115d8e] transition-colors">
                          {category}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-600 rounded px-2 py-1">
                          {count}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for SSG (optional)
export async function generateStaticParams() {
  try {
    const res = await axios.get(
      `${API_BASE_URL}/blogs/get-blogs.php?website_id=6&status=2&limit=1000`,
      { headers: API_HEADERS }
    );

    const blogs = res?.data?.data || [];
    const slugs = [...sampleBlogs, ...blogs];
    return slugs?.map((blog) => ({
      slug: blog.slug,
    }));
  } catch {
    return sampleBlogs.map((blog) => ({ slug: blog.slug }));
  }
}
