import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared";
import { ArticleDetail } from "@/features/articles";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/features/articles/data/articles";
import { getSeoPage } from "@/config/seo-pages";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return buildMetadata({ title: "Article not found", noIndex: true });
  }

  return buildMetadata({
    path: `/articles/${article.slug}`,
    image: article.image,
    imageAlt: article.title,
    publishedTime: article.publishedAt,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const path = `/articles/${article.slug}`;
  const seo = getSeoPage(path);
  const publisher = {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: seo?.description ?? article.excerpt,
    image: new URL(article.image, siteConfig.url).toString(),
    datePublished: article.publishedAt,
    // Google warns when an Article has no dateModified, and the sitemap uses
    // the same value, so the two can never disagree.
    dateModified: seo?.lastModified ?? article.publishedAt,
    // The byline is "Yuni Tech. Team". That is the company, not a person, and
    // marking it as a Person is a structured-data error. When articles get
    // named authors, swap this for a Person with a url.
    author: publisher,
    publisher,
    mainEntityOfPage: new URL(path, siteConfig.url).toString(),
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: "Articles", path: "/articles" },
            { name: article.title, path },
          ]),
        ]}
      />
      <ArticleDetail article={article} related={getRelatedArticles(slug)} />
    </>
  );
}
