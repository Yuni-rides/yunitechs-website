import Image from "next/image";
import { MotionInView } from "@/components/shared";
import { Container } from "@/components/ui";
import {
  trustedBrands,
  type TrustedBrand,
} from "@/features/home/data/trusted-brands";
import { cn } from "@/lib/utils";

export function TrustedBy() {
  const firstRow = trustedBrands.slice(0, 5);
  const secondRow = trustedBrands.slice(5);

  return (
    <section
      aria-labelledby="trusted-by-heading"
      className="bg-brand-primary overflow-hidden py-16 lg:py-24"
    >
      <Container>
        <MotionInView className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <h2
            id="trusted-by-heading"
            className="font-heading text-brand-secondary text-4xl leading-[1.05] font-semibold tracking-tight uppercase sm:text-5xl lg:text-6xl"
          >
            Trusted by
            <br />
            visionaries
          </h2>
          <p className="max-w-[240px] text-[11px] leading-relaxed text-white/85 lg:pb-2">
            Building long-term relationships through innovation and results.
            Helping businesses transform ideas into scalable digital solutions.
          </p>
        </MotionInView>
      </Container>

      <div className="mt-10 flex flex-col gap-4 lg:mt-14 lg:gap-5">
        <MarqueeRow brands={firstRow} />
        <MarqueeRow brands={secondRow} reverse />
      </div>
    </section>
  );
}

type MarqueeRowProps = {
  brands: TrustedBrand[];
  reverse?: boolean;
};

function MarqueeRow({ brands, reverse = false }: MarqueeRowProps) {
  const items = [...brands, ...brands];

  return (
    <div className="group relative w-full overflow-hidden">
      <ul
        aria-label="Trusted partner logos"
        className={cn(
          "flex w-max will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{ "--marquee-duration": "25s" } as React.CSSProperties}
      >
        {items.map((brand, i) => (
          <li
            key={`${brand.src}-${i}`}
            aria-hidden={i >= brands.length || undefined}
            className="bg-brand-secondary grid size-28 shrink-0 place-items-center rounded-full sm:size-32 lg:size-46"
          >
            <Image
              src={brand.src}
              alt={i < brands.length ? brand.name : ""}
              width={brand.width}
              height={brand.height}
              className="h-auto max-h-12 w-auto max-w-[70%] object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
