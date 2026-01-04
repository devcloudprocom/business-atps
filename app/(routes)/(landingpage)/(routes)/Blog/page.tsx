"use client";

import {
  BLOG_CATEGORIES,
  BLOG_FEATURED_POSTS,
  BLOG_FEED_POSTS,
} from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { Rss, Search } from "lucide-react";

export default function Blogs() {
  return (
    <main className="bg-black pt-28 sm:pt-40 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-3">
              <h1 className="text-[28px] leading-[32px] font-semibold text-white">
                Blog
              </h1>
              <Rss className="h-5 w-5 text-white/80" />
            </div>

            <nav className="mt-6">
              <ul className="space-y-3">
                {BLOG_CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      type="button"
                      className={[
                        "text-left w-full text-[13px] leading-[18px] font-medium transition-colors",
                        cat === "All posts"
                          ? "text-[rgb(0,230,153)]"
                          : "text-white/80 hover:text-white",
                      ].join(" ")}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main */}
          <section className="min-w-0">
            {/* Search */}
            <div className="relative w-full max-w-[460px] ml-auto">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/45" />
              <input
                aria-label="Search posts"
                placeholder="Search..."
                className="w-full h-9 rounded-lg bg-white/5 border border-white/10 pl-10 pr-32 text-[13px] text-white placeholder:text-white/35 outline-none focus:ring-2 focus:ring-white/10"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] leading-[13px] italic text-white/35">
                Powered by Algolia
              </span>
            </div>

            {/* Featured cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {BLOG_FEATURED_POSTS.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
                >
                  <div className="p-4 sm:p-5">
                    <div className="relative h-[200px] sm:h-[220px] rounded-xl bg-white/5 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>

                  <div className="px-5 pb-5">
                    <div className="flex items-center gap-2 text-[12px] leading-[14px] uppercase tracking-wide">
                      <span className="text-[rgb(0,230,153)] font-semibold">
                        {post.category}
                      </span>
                      <span className="text-white/40">·</span>
                      <span className="text-white/50 font-medium">
                        {post.date}
                      </span>
                    </div>

                    <h2 className="mt-3 text-[18px] leading-[24px] font-semibold text-white group-hover:text-white/95">
                      {post.title}
                    </h2>

                    <div className="mt-4 flex items-center gap-3">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={28}
                        height={28}
                        className="rounded-full"
                      />
                      <span className="text-[14px] leading-[20px] font-medium text-white/80">
                        {post.author.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Subscribe */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-[16px] leading-[22px] font-semibold text-white">
                  Subscribe to our changelog.
                </p>
                <p className="text-[14px] leading-[20px] text-white/60">
                  No spam, guaranteed.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <input
                  aria-label="Email address"
                  placeholder="Your email..."
                  className="h-9 flex-1 sm:w-[260px] rounded-full bg-black/20 border border-white/10 px-5 text-[13px] text-white placeholder:text-white/35 outline-none focus:ring-2 focus:ring-white/10"
                />
                <button
                  type="button"
                  className="h-9 px-6 rounded-full bg-[rgb(0,230,153)] text-black text-[13px] font-semibold hover:bg-[rgb(0,230,153)]/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Feed */}
            <div className="mt-10 space-y-10">
              {BLOG_FEED_POSTS.map((post) => {
                const hasImage = Boolean(post.image);

                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className={[
                      "block border-b border-white/10 pb-10",
                      hasImage ? "group" : "",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "grid gap-6 items-center",
                        hasImage ? "md:grid-cols-[1fr_340px]" : "grid-cols-1",
                      ].join(" ")}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-[12px] leading-[14px] uppercase tracking-wide">
                          <span className="text-[rgb(0,230,153)] font-semibold">
                            {post.category}
                          </span>
                          <span className="text-white/40">·</span>
                          <span className="text-white/50 font-medium">
                            {post.date}
                          </span>
                        </div>

                        <h3 className="mt-3 text-[22px] leading-[28px] sm:text-[24px] sm:leading-[30px] font-semibold text-white">
                          {post.title}
                        </h3>

                        {post.excerpt ? (
                          <p className="mt-3 text-[13px] leading-[20px] text-white/60 max-w-2xl">
                            {post.excerpt}
                          </p>
                        ) : null}

                        {post.author ? (
                          <div className="mt-4 flex items-center gap-3">
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              width={26}
                              height={26}
                              className="rounded-full"
                            />
                            <span className="text-[14px] leading-[20px] font-medium text-white/70">
                              {post.author.name}
                            </span>
                          </div>
                        ) : null}
                      </div>

                      {hasImage ? (
                        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                          <div className="relative h-[190px] sm:h-[210px]">
                            <Image
                              src={post.image!}
                              alt={post.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 340px"
                              className="object-cover scale-110"
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
