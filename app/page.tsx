import { Hero } from "@/components/main/Hero";
import { IconsMarquee } from "@/components/main/IconsMarquee";
import { FeaturesSection } from "@/components/main/features-section";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-4 bg-white dark:bg-black">
        <Hero />
        <IconsMarquee />
        <FeaturesSection />
      </main>
    </>
  );
}
