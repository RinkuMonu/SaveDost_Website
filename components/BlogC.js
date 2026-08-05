"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { ArrowRight, CalendarDays, Clock3, Filter, Search, SlidersHorizontal } from "lucide-react";
import { sampleBlogs } from "../src/data/sampleBlogs";
import ScrollReveal from "./ScrollReveal";

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recent";
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function readingTime(text = "") {
  const words = text
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(2, Math.ceil(words / 180))} min read`;
}

function ArticleImage({ post, className }) {
  return (
    <Image
      src={post?.image || "/blog/blogbg.png"}
      alt={post?.title || "SaveDost article"}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className={className}
    />
  );
}

function FeaturedArticle({ post }) {
  if (!post) return null;
  return (
    <article className="group grid overflow-hidden rounded-3xl border border-[#d9e9ec] bg-white shadow-[0_16px_38px_rgba(12,61,76,.08)] lg:grid-cols-[1.08fr_.92fr]">
      <div className="relative min-h-75 overflow-hidden sm:min-h-[390px]">
        <ArticleImage
          post={post}
          className="object-cover transition duration-500 group-hover:scale-[1.025]"
        />
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-9">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-[#e6f5f7] px-3 py-1.5 font-extrabold text-[#027f9f]">
            {post.category || "SaveDost"}
          </span>
          <span className="flex items-center gap-1.5 text-slate-500">
            <CalendarDays size={14} /> {formatDate(post.created_at)}
          </span>
        </div>
        <p className="mt-6 text-xs font-extrabold uppercase tracking-[.17em] text-[#82b956]">
          Featured Article
        </p>
        <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#0C3D4C] sm:text-3xl">
          {post.title}
        </h2>
        <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-600">
          {post.short_description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
            <Clock3 size={14} /> {readingTime(post.short_description)}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#026381] transition hover:gap-3 hover:text-[#0289ad]"
          >
            Read Article <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function FilterBar({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedDate,
  setSelectedDate,
  categories,
  clearFilters,
}) {
  return (
    <div className="mt-10 rounded-2xl border border-[#d9e9ec] bg-white p-4 shadow-[0_8px_22px_rgba(12,61,76,.05)]">
      <div className="flex items-center gap-2 pb-4 text-sm font-extrabold text-[#0C3D4C]">
        <SlidersHorizontal size={18} className="text-[#0289ad]" /> Find an article
      </div>
      <div className="grid gap-3 lg:grid-cols-[1fr_220px_190px_auto]">
        <label className="relative block">
          <span className="sr-only">Search articles</span>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0289ad]" size={18} />
          <input
            id="blog-search"
            name="blogSearch"
            type="search"
            placeholder="Search by title or topic"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full rounded-xl border border-[#dcebed] bg-[#f8fbfc] py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#62bdcf] focus:ring-2 focus:ring-[#d8f0f4]"
          />
        </label>
        <label className="relative block">
          <span className="sr-only">Filter by category</span>
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0289ad]" size={18} />
          <select
            id="blog-category"
            name="blogCategory"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full appearance-none rounded-xl border border-[#dcebed] bg-[#f8fbfc] py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#62bdcf] focus:ring-2 focus:ring-[#d8f0f4]"
          >
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label className="relative block">
          <span className="sr-only">Filter by publication date</span>
          <CalendarDays
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0289ad]"
            size={18}
          />
          <input
            id="blog-date"
            name="blogDate"
            type="date"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
            className="w-full rounded-xl border border-[#dcebed] bg-[#f8fbfc] py-3 pl-11 pr-3 text-sm text-slate-700 outline-none transition focus:border-[#62bdcf] focus:ring-2 focus:ring-[#d8f0f4]"
          />
        </label>
        <button
          type="button"
          onClick={clearFilters}
          className="rounded-xl border border-[#b9dce3] px-5 py-3 text-sm font-bold text-[#026381] transition hover:border-[#0289ad] hover:bg-[#eef8fa]"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

function PostCard({ post }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#d9e9ec] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(12,61,76,.1)]">
      <div className="relative h-56 overflow-hidden">
        <ArticleImage
          post={post}
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="rounded-full bg-[#e8f5f7] px-3 py-1 font-bold text-[#027f9f]">
            {post.category || "SaveDost"}
          </span>
          <span className="text-slate-400">{formatDate(post.created_at)}</span>
        </div>
        <h3 className="mt-5 line-clamp-2 text-xl font-extrabold leading-7 text-[#0C3D4C]">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {post.short_description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400">
            <Clock3 size={13} /> {readingTime(post.short_description)}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            aria-label={`Read ${post.title}`}
            className="grid h-9 w-9 place-items-center rounded-full border border-[#b7d9e0] text-[#026381] transition group-hover:border-[#026381] group-hover:bg-[#026381] group-hover:text-white"
          >
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogC() {
  const [blogs, setBlogs] = useState(sampleBlogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    axios
      .get("/api/blogs")
      .then((response) => {
        const remoteBlogs = response.data?.data || [];
        const sampleSlugs = new Set(sampleBlogs.map((blog) => blog.slug));
        setBlogs([...sampleBlogs, ...remoteBlogs.filter((blog) => !sampleSlugs.has(blog.slug))]);
      })
      .catch(() => setBlogs(sampleBlogs));
  }, []);

  const categories = useMemo(
    () => [...new Set(blogs.map((blog) => blog.category).filter(Boolean))],
    [blogs]
  );
  const filteredBlogs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return blogs.filter((blog) => {
      const searchMatch =
        !query ||
        blog.title?.toLowerCase().includes(query) ||
        blog.short_description?.toLowerCase().includes(query);
      const categoryMatch = !selectedCategory || blog.category === selectedCategory;
      const dateMatch = !selectedDate || blog.created_at?.slice(0, 10) === selectedDate;
      return searchMatch && categoryMatch && dateMatch;
    });
  }, [blogs, searchTerm, selectedCategory, selectedDate]);

  const filtersActive = Boolean(searchTerm || selectedCategory || selectedDate);
  const featuredPost = filtersActive ? null : filteredBlogs[0];
  const gridPosts = featuredPost ? filteredBlogs.slice(1) : filteredBlogs;
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedDate("");
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <ScrollReveal className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#0289ad]">
            Latest Insights
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-4xl">
            Guides and updates from SaveDost
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-600 lg:text-right">
          Explore clear, practical information created to make digital payments and financial
          services easier to understand.
        </p>
      </ScrollReveal>

      {featuredPost && (
        <ScrollReveal className="mt-10">
          <FeaturedArticle post={featuredPost} />
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.06}>
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          categories={categories}
          clearFilters={clearFilters}
        />
      </ScrollReveal>
      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-[#315a67]">
          {gridPosts.length} {gridPosts.length === 1 ? "article" : "articles"}
        </p>
        {filtersActive && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs font-bold text-[#0289ad] hover:text-[#026381]"
          >
            Reset filters
          </button>
        )}
      </div>
      {gridPosts.length > 0 ? (
        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post, index) => (
            <ScrollReveal key={post.id || post.slug} delay={(index % 3) * 0.07} className="h-full">
              <PostCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-[#b9dce3] bg-white px-6 py-14 text-center">
          <Search size={28} className="mx-auto text-[#82beca]" />
          <h3 className="mt-4 font-extrabold text-[#0C3D4C]">No matching articles</h3>
          <p className="mt-2 text-sm text-slate-500">
            Try a different search or clear the filters.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-lg bg-[#026381] px-5 py-2.5 text-sm font-bold text-white"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
