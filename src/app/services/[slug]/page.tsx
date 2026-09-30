import { notFound } from "next/navigation";
import { CtaBand, Faq } from "@/components/shared";
import { TrustedBy } from "@/features/home";
import {
  ServiceDetailBanner,
  ServiceOffer,
  ServiceOverview,
  ServiceProcess,
  ServiceProjects,
  ServiceStack,
} from "@/features/services";
import { getServiceBySlug, services } from "@/features/services/data/services";
import { buildMetadata } from "@/lib/seo";
import { homeFaqs } from "@/features/home/data/faqs";

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
      <ServiceProcess process={service.process} />
      <ServiceStack stack={service.stack} />
      <ServiceProjects work={service.work} />
      <Faq
        items={homeFaqs}
        intro={
          <p>
            <strong>Yuni Tech</strong> delivers custom software, AI-powered
            applications, modern websites, and scalable digital solutions
            designed to help businesses innovate, grow, and stay ahead in an
            ever-evolving digital landscape. Operating from{" "}
            <strong>San Francisco</strong> and <strong>Karachi</strong>, we
            serve clients across the globe with a commitment to quality and
            excellence.
          </p>
        }
      />
      <CtaBand cta={service.cta} />
    </>
  );
}
