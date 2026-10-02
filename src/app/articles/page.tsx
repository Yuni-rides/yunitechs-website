import { ArticlesBanner, ArticlesCta, ArticlesGrid } from "@/features/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ path: "/articles" });

export default function ArticlesPage() {
  return (
    <>
      <ArticlesBanner />
      <ArticlesGrid />
      <ArticlesCta />
    </>
  );
}
