import {
  AboutBanner,
  AboutJourney,
  AboutProcess,
  AboutTeam,
  AboutTeamMembers,
  AboutTransform,
} from "@/features/about";
import {
  ClientReviews,
  CtaBanner,
  FeaturedProjects,
  TrustedBy,
} from "@/features/home";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ path: "/about" });

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <AboutTeam />
      <AboutJourney />
      <AboutTeamMembers />
      <AboutProcess />
      <AboutTransform />
      <FeaturedProjects />
      <TrustedBy />
      <ClientReviews />
      <CtaBanner />
    </>
  );
}
