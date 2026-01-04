"use client";

import {
  BLOG_FEATURED_POSTS,
  BLOG_FEED_POSTS,
  BLOG_POSTS,
} from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Facebook, Linkedin, X } from "lucide-react";
import { useMemo } from "react";

type BlogAuthor = {
  name: string;
  avatar: string;
  role?: string;
};

type BlogArticle = {
  id: string;
  title: string;
  category: string;
  date: string;
  image?: string;
  excerpt?: string;
  subtitle?: string;
  author?: BlogAuthor;
};

function pickArticleById(id: string): BlogArticle | null {
  const fromFeatured = BLOG_FEATURED_POSTS.find((p) => p.id === id);
  if (fromFeatured) return fromFeatured;

  const fromFeed = BLOG_FEED_POSTS.find((p) => p.id === id);
  if (fromFeed) return fromFeed;

  const fromPosts = BLOG_POSTS.find((p) => p.id === id);
  if (fromPosts) return fromPosts;

  return null;
}

export const BlogDetails = ({ id }: { id: string }) => {
  const article = useMemo(() => pickArticleById(id), [id]);

  const moreArticles = useMemo(() => {
    const all: BlogArticle[] = [
      ...BLOG_FEATURED_POSTS,
      ...BLOG_FEED_POSTS,
      ...BLOG_POSTS,
    ];

    const seen = new Set<string>();
    const unique = all.filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });

    return unique
      .filter((p) => p.id !== id)
      .filter((p) => Boolean(p.image))
      .slice(0, 3);
  }, [id]);

  if (!article) {
    return (
      <main className="bg-black pt-28 sm:pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-white/60 text-[13px] leading-[18px] font-semibold uppercase tracking-wide">
              Blog
            </p>
            <h1 className="mt-3 text-white text-[34px] leading-[40px] font-semibold">
              Blog not found
            </h1>
            <p className="mt-3 text-white/60 text-[14px] leading-[22px]">
              The blog post you requested doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="inline-flex mt-6 text-[14px] font-semibold text-[rgb(0,230,153)] hover:text-[rgb(0,230,153)]/90"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const author: BlogAuthor = article.author ?? {
    name: "Carlota Soto",
    avatar: "/assets/user_b.png",
    role: "Product Marketing Lead",
  };

  const subtitle =
    article.subtitle ??
    "A story about shipping something real, quickly — and keeping it production-ready.";

  return (
    <main className="bg-black pt-28 sm:pt-40 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-12">
          {/* Main content */}
          <article className="min-w-0">
            {/* Header */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] leading-[13px] font-semibold uppercase tracking-wide text-white/80">
                {article.category}
              </span>
              <span className="text-[11px] leading-[13px] font-semibold uppercase tracking-wide text-white/50">
                {article.date}
              </span>
            </div>

            <h1 className="mt-5 text-white text-[34px] leading-[38px] sm:text-[44px] sm:leading-[48px] font-semibold tracking-tight">
              {article.title}
            </h1>

            <p className="mt-4 text-white/70 text-[15px] leading-[22px] max-w-2xl">
              {subtitle}
            </p>

            {/* Hero image */}
            {article.image ? (
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#121212]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            ) : null}

            {/* Quote */}
            <div className="mt-8 border-l-2 border-[rgb(0,230,153)] pl-5">
              <p className="text-white text-[14px] leading-[22px]">
                “I’ve worked with traditional LMS and database platforms in my
                professional environment, but for building a side project, I
                wanted something easier to set up. It hardly took me 10 minutes
                to understand how to link ATPS with my online exams and quizzes,
                and how to manage student workflows seamlessly.”
              </p>
              <p className="mt-4 text-[13px] leading-[20px] text-white/70">
                (
                <span className="text-[rgb(0,230,153)] font-semibold">
                  Dr. Shridhar Deshmukh
                </span>
                , Academic Director and creator of{" "}
                <span className="text-[rgb(0,230,153)] font-semibold">
                  ATPS
                </span>
                )
              </p>
            </div>

            {/* Body */}
            <div className="mt-8 space-y-5 text-white/70 text-[14px] leading-[22px]">
              <p>
                Online exams and quizzes are becoming increasingly important in
                education. They allow students to test their knowledge in a
                secure and reliable environment, and they can be used to assess
                students’ understanding of a subject.
              </p>
              <p>
                <span className="text-[rgb(0,230,153)] font-semibold">
                  ATPS
                </span>{" "}
                is a platform that allows educators to create and manage online
                exams and quizzes, and to track student progress.
              </p>
            </div>

            <h2 className="mt-12 text-white text-[28px] leading-[34px] sm:text-[32px] sm:leading-[38px] font-semibold tracking-tight">
              How ATPS Began: Making Online Exams and Quizzes Available
            </h2>

            <div className="mt-5 space-y-5 text-white/70 text-[14px] leading-[22px]">
              <p>
                ATPS didn’t start as a startup idea. It began with a
                life-changing event. A few years ago, its creator{" "}
                <span className="text-[rgb(0,230,153)] font-semibold">
                  Dr. Shridhar Deshmukh
                </span>{" "}
                realized the need for a platform that would allow educators to
                create and manage online exams and quizzes, and to track student
                progress.
              </p>
              <p>
                That realization eventually turned into a startup idea and then
                a production-quality platform.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-32 h-fit">
            <div className="space-y-8">
              {/* Posted by */}
              <div>
                <p className="text-[11px] leading-[13px] font-semibold uppercase tracking-wide text-white/50">
                  Posted by
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={34}
                    height={34}
                    className="rounded-full"
                  />
                  <div className="min-w-0">
                    <p className="text-white text-[14px] leading-[18px] font-semibold truncate">
                      {author.name}
                    </p>
                    <p className="text-white/55 text-[12px] leading-[16px] truncate">
                      {author.role ?? "Author"}
                    </p>
                  </div>
                </div>
              </div>

              {/* More articles */}
              <div>
                <p className="text-[11px] leading-[13px] font-semibold uppercase tracking-wide text-white/50">
                  More articles
                </p>

                <div className="mt-4 space-y-4">
                  {moreArticles.map((p) => (
                    <Link
                      key={p.id}
                      href={`/blog/${p.id}`}
                      className="group flex items-center gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-white text-[13px] leading-[18px] font-semibold line-clamp-2 group-hover:text-white/90">
                          {p.title}
                        </p>
                        <p className="mt-1 text-white/55 text-[12px] leading-[16px] truncate">
                          {p.author?.name ?? "ATPS"}
                        </p>
                      </div>

                      {p.image ? (
                        <div className="shrink-0 rounded-lg bg-white/5 overflow-hidden">
                          <div className="relative h-10 w-14">
                            <Image
                              src={p.image}
                              alt={p.title}
                              fill
                              sizes="56px"
                              className="object-contain p-2"
                            />
                          </div>
                        </div>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center justify-between">
                <p className="text-white/60 text-[12px] leading-[16px]">
                  Share:
                </p>
                <div className="flex items-center gap-4 text-white/70">
                  <button
                    type="button"
                    aria-label="Share on X"
                    className="hover:text-white transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Share on Facebook"
                    className="hover:text-white transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Share on LinkedIn"
                    className="hover:text-white transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Subscribe */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-white text-[14px] leading-[18px] font-semibold">
                  Subscribe to our changelog.
                </p>
                <p className="mt-1 text-white/60 text-[12px] leading-[16px]">
                  No spam, guaranteed.
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <input
                    aria-label="Email address"
                    placeholder="Your email..."
                    className="h-9 flex-1 rounded-full bg-black/20 border border-white/10 px-4 text-[13px] text-white placeholder:text-white/35 outline-none focus:ring-2 focus:ring-white/10"
                  />
                  <button
                    type="button"
                    aria-label="Subscribe"
                    className="h-9 w-10 rounded-full bg-[rgb(0,230,153)] text-black hover:bg-[rgb(0,230,153)]/90 transition-colors inline-flex items-center justify-center"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};
