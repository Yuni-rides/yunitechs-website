import { notFound } from "next/navigation";
import { TrustedBy } from "@/features/home";
import {
  ServiceDetailBanner,
  ServiceOffer,
  ServiceOverview,
} from "@/features/services";
import { getServiceBySlug, services } from "@/features/services/data/services";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({ title: "Service not found", noIndex: true });
  }

  return buildMetadata({
    title: service.title,
    description: service.banner.body,
    path: `/services/${service.slug}`,
    image: service.banner.image.src,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <ServiceDetailBanner banner={service.banner} />
      <TrustedBy />
      <ServiceOverview overview={service.overview} />
      <ServiceOffer offer={service.offer} />
    </>
  );
}
