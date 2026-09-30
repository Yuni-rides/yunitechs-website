import {
  ProductBanner,
  ProductChallengeSection,
  ProductOverviewSection,
} from "@/features/product";
import { product } from "@/features/product/data/product";
import { CtaBand } from "@/components/shared";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${product.name} — Our Product`,
  description:
    "A technology-powered student transportation ecosystem built for safer, smarter and more connected journeys.",
  path: "/product",
  image: product.image.src,
});

export default function ProductPage() {
  return (
    <>
      <ProductBanner product={product} />
      <ProductOverviewSection overview={product.overview} />
      <ProductChallengeSection challenge={product.challenge} />
      <CtaBand
        cta={{
          heading: ["Building something like this?", "Let's talk."],
          body: "Share your idea with our team and get a free consultation. We'll help you turn it into a product with the operations behind it.",
          label: "Start Your Project",
        }}
      />
    </>
  );
}
