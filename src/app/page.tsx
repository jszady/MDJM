import { createMetadata } from "@/lib/metadata";
import { HomeHero } from "@/components/sections/home-hero";
import { ServiceGrid } from "@/components/sections/service-grid";
import { WhyMjdm } from "@/components/sections/why-mjdm";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CaseStudyGrid } from "@/components/sections/case-study-grid";
import { IndustriesBand } from "@/components/sections/industries-band";
import { TrustSignalsBand } from "@/components/sections/trust-signals-band";
import { TestimonialsStrip } from "@/components/sections/testimonials-strip";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = createMetadata({
  title: "Premium Websites, SEO & Social Growth Agency",
  description:
    "MJDM is a Toronto web design and digital marketing agency. We build high-converting websites and run the SEO, social, and content that keeps brands visible.",
  path: "/",
  keywords: [
    "web design agency Toronto",
    "web development agency Toronto",
    "SEO agency Toronto",
    "social media management agency",
    "digital agency Toronto",
    "creative digital agency Canada"
  ]
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServiceGrid className="pt-10 sm:pt-14 lg:pt-16" />
      <WhyMjdm />
      <ProcessTimeline />
      <CaseStudyGrid limit={3} />
      <IndustriesBand />
      <TrustSignalsBand />
      <TestimonialsStrip />
      <BlogPreview />
      <CtaBanner
        title="If your digital presence feels behind your ambition, MJDM fixes that."
        description="Whether you need a stronger website, sharper content, better search visibility, or a more complete brand system, MJDM builds digital presence that feels current and converts harder."
      />
    </>
  );
}
