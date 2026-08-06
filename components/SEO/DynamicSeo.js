// "use client";
// import { useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
// import seoConfig from '@/app/seoConfig';

// const SEO = () => {
//   const pathname = usePathname();
//   const currentPath = pathname || '/';
//   const baseUrl = 'https://www.finuniques.in';
//   const [seoData, setSeoData] = useState();

//   useEffect(() => {
//     const getSeo = async () => {
//       const data = await seoConfig(pathname);
//       setSeoData(data);
//     };
//     getSeo();
//   }, [pathname]);

//   useEffect(() => {
//     if (seoData) {
//       // Update title
//       document.title = seoData?.meta_title;

//       // Update or create meta tags
//       const updateMetaTag = (name, content, property) => {
//         const selector = property
//           ? `meta[property="${property}"]`
//           : `meta[name="${name}"]`;

//         let tag = document.querySelector(selector);

//         if (!tag) {
//           tag = document.createElement('meta');
//           if (property) {
//             tag.setAttribute('property', property);
//           } else {
//             tag.setAttribute('name', name);
//           }
//           document.head.appendChild(tag);
//         }

//         tag.setAttribute('content', content);
//       };

//       // Standard meta tags
//       updateMetaTag('description', seoData?.meta_description);
//       updateMetaTag('keywords', seoData?.meta_keywords);

//       // OpenGraph meta tags
//       updateMetaTag(null, seoData?.og_title || seoData?.meta_title, 'og:title');
//       updateMetaTag(null, seoData?.og_description || seoData?.meta_description, 'og:description');
//       updateMetaTag(null, seoData?.og_image || 'https://sevenunique.com/image/logo.png', 'og:image');
//       updateMetaTag(null, 'website', 'og:type');
//       updateMetaTag(null, seoData?.og_url || `${baseUrl}${currentPath}`, 'og:url');

//       // Twitter meta tags
//       updateMetaTag(null, seoData?.twitterCard || 'summary_large_image', 'twitter:card');
//       updateMetaTag(null, seoData?.og_title || seoData?.meta_title, 'twitter:title');
//       updateMetaTag(null, seoData?.og_description || seoData?.meta_description, 'twitter:description');
//       updateMetaTag(null, seoData?.og_image || 'https://sevenunique.com/image/logo.png', 'twitter:image');

//       // Update canonical link
//       let canonical = document.querySelector('link[rel="canonical"]');
//       if (!canonical) {
//         canonical = document.createElement('link');
//         canonical.setAttribute('rel', 'canonical');
//         document.head.appendChild(canonical);
//       }
//       canonical.setAttribute('href', seoData?.og_url || `${baseUrl}${currentPath}`);
//     }
//   }, [pathname, seoData, currentPath]);

//   return null;
// };

// export default SEO;

"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const STATIC_METADATA_PATHS = new Set(["/login", "/signup"]);
const seoCache = new Map();

const DynamicSeo = () => {
  const pathname = usePathname();
  const currentPath = pathname || "/";
  const baseUrl = "https://savedost.com";
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    if (STATIC_METADATA_PATHS.has(currentPath)) {
      setSeoData(null);
      return;
    }

    if (seoCache.has(currentPath)) {
      setSeoData(seoCache.get(currentPath));
      return;
    }

    setSeoData(null);
    let active = true;
    const controller = new AbortController();

    const getSeo = async () => {
      try {
        const response = await fetch(`/api/seo?path=${encodeURIComponent(currentPath)}`, {
          signal: controller.signal,
        });
        const result = await response.json();
        const data = result.data || null;
        seoCache.set(currentPath, data);
        if (active) setSeoData(data);
      } catch (error) {
        if (active && error.name !== "AbortError") {
          seoCache.set(currentPath, null);
          setSeoData(null);
        }
      }
    };

    const idleCallback = window.requestIdleCallback
      ? window.requestIdleCallback(getSeo, { timeout: 2000 })
      : window.setTimeout(getSeo, 300);

    return () => {
      active = false;
      controller.abort();
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleCallback);
      else window.clearTimeout(idleCallback);
    };
  }, [currentPath]);

  useEffect(() => {
    if (!seoData) return;

    document.title = seoData.meta_title;

    const updateMeta = (name, content, property) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;

      let tag = document.querySelector(selector);

      if (!tag) {
        tag = document.createElement("meta");
        if (property) tag.setAttribute("property", property);
        else tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Basic
    updateMeta("description", seoData.meta_description);
    updateMeta("keywords", seoData.meta_keywords);

    // OG
    updateMeta(null, seoData.og_title, "og:title");
    updateMeta(null, seoData.og_description, "og:description");
    updateMeta(null, seoData.og_image, "og:image");
    updateMeta(null, "website", "og:type");
    updateMeta(null, seoData.og_url || `${baseUrl}${currentPath}`, "og:url");

    // Twitter
    updateMeta(null, "summary_large_image", "twitter:card");
    updateMeta(null, seoData.og_title, "twitter:title");
    updateMeta(null, seoData.og_description, "twitter:description");
    updateMeta(null, seoData.og_image, "twitter:image");

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = seoData.og_url || `${baseUrl}${currentPath}`;
  }, [seoData, pathname, currentPath]);

  return null;
};

export default DynamicSeo;
