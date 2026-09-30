import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, XIcon } from "lucide-react";
import { Container } from "@/components/ui";
import { CtaBand } from "@/components/shared";
import {
  FacebookIcon,
  LinkedinIcon,
} from "@/components/shared";
import { ArticleCard } from "@/features/articles/components/article-card";
import {
  getFilterLabel,
  type Article,
} from "@/features/articles/data/articles";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24zM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.39 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48z" />
    </svg>
  );
}

function getShareLinks(url: string, title: string) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  return [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      Icon: LinkedinIcon,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      Icon: FacebookIcon,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
      Icon: XIcon,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${t}%20${u}`,
      Icon: WhatsappIcon,
    },
  ];
}

export function ArticleDetail({
  article,
  related,
}: {
  article: Article;
  related: Article[];
}) {
  const published = new Date(article.publishedAt);
  const shareUrl = `${siteConfig.url}/articles/${article.slug}`;
  const shareLinks = getShareLinks(shareUrl, article.title);

  return (
    <article className="bg-brand-primary">
      <header className="bg-brand-secondary text-brand-primary pt-12 lg:pt-16">
        <Container className="flow-root">
          <p className="text-brand-primary/70 flex items-center gap-2 text-[11px] tracking-wider uppercase">
            <span>By {article.author}</span>
            <span aria-hidden>•</span>
            <span>{article.readingMinutes} minutes read</span>
            <time className="sr-only" dateTime={article.publishedAt}>
              {published.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>

          <h1 className="font-heading mt-4 max-w-5xl text-3xl leading-[1.05] font-bold tracking-tight uppercase sm:text-5xl lg:text-[4.5rem]">
            {article.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ul className="flex gap-2" aria-label="Share this article">
                {shareLinks.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Share this article on ${label}`}
                      className="bg-brand-primary text-brand-secondary grid size-9 place-items-center rounded-full transition-transform hover:scale-105"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
              <span className="text-[11px] tracking-wider uppercase">
                Share
              </span>
            </div>

            <div className="group flex items-center gap-2">
              <Link
                href="/articles"
                className="bg-brand-primary group-hover:bg-brand-primary-light inline-flex h-9 items-center rounded-full px-6 text-[11px] font-medium tracking-wider text-white uppercase transition-colors"
              >
                Back
              </Link>
              <Link
                href="/articles"
                aria-label="Back to all articles"
                className="bg-brand-primary group-hover:bg-brand-primary-light grid size-9 place-items-center rounded-full text-white transition-colors"
              >
                <ArrowUpLeft
                  className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </Link>
            </div>
          </div>

          <div className="bg-brand-secondary relative z-10 mx-auto mt-10 mb-[-14%] w-[90%] rounded-xl p-2 shadow-xl lg:p-8">
            <div className="relative aspect-[430/267] overflow-hidden rounded-lg">
              <Image
                src={article.image}
                alt=""
                aria-hidden
                fill
                sizes="(min-width: 1024px) 1200px, 93vw"
                loading="eager"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </header>

      <Container>
        <div className="grid gap-8 pt-[calc(18%+2rem)] pb-14 lg:grid-cols-[minmax(0,30%)_minmax(0,70%)] lg:gap-10 lg:pb-20">
          {/* Topic — the filter tab this article belongs to */}
          <p className="bg-brand-secondary text-brand-primary flex h-fit w-full flex-wrap items-center gap-4 rounded-lg px-6 py-4 shadow-[0_10px_28px_-8px_rgb(0_0_0_/_0.65)]">
            <span className="text-sm font-bold tracking-wide uppercase">
              Topic:
            </span>
            <span className="text-[13px] tracking-wide uppercase">
              {getFilterLabel(article.filter)}
            </span>
          </p>

          <div>
            {article.sections.map((section, index) => (
              <section key={section.heading} className="mt-12 first:mt-0">
                <h2 className="text-2xl leading-snug tracking-tight text-white uppercase sm:text-[2rem]">
                  {section.heading}
                </h2>

                {section.body.map((paragraph, i) => (
                  <p
                    key={paragraph}
                    className={cn(
                      "text-[13px] leading-relaxed text-white/75 sm:text-justify",
                      i === 0 ? "mt-6" : "mt-1",
                    )}
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-1 pl-4">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-[13px] leading-relaxed text-white/75 sm:text-justify"
                      >
                        <span aria-hidden className="mr-2">
                          ·
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </Container>

      <CtaBand cta={article.cta} />

      {related.length > 0 && (
        <section aria-labelledby="related-articles-heading" className="py-16">
          <Container>
            <h2
              id="related-articles-heading"
              className="text-brand-secondary font-sans text-3xl font-light tracking-tight uppercase sm:text-4xl lg:text-5xl"
            >
              Related articles
            </h2>

            <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <ArticleCard article={item} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </article>
  );
}
