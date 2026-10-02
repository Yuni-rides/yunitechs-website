import {
  ProductBanner,
  ProductChallengeSection,
  ProductDigitalSection,
  ProductEcosystemSection,
  ProductScalabilitySection,
  ProductFlowSection,
  ProductOverviewSection,
} from "@/features/product";
import { product } from "@/features/product/data/product";
import { CtaBand, JsonLd } from "@/components/shared";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/product",
  image: product.image.src,
  imageAlt: product.image.alt,
});

export default function ProductPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: product.name, path: "/product" }])}
      />
      <ProductBanner product={product} />
      <ProductOverviewSection overview={product.overview} />
      <ProductChallengeSection challenge={product.challenge} />
      <ProductFlowSection flow={product.flow} />
      <ProductEcosystemSection ecosystem={product.ecosystem} />
      <ProductDigitalSection digital={product.digital} />
      <ProductScalabilitySection scalability={product.scalability} />
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
