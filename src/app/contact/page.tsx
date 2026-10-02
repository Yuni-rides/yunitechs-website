import { ContactBanner, ContactForm } from "@/features/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <ContactBanner />

      <ContactForm />
    </>
  );
}
