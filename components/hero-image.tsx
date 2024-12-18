import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";
import { BackgroundGradient } from "./ui/background-gradient";

export default function HeroImage() {
  return (
    <div>
      <BackgroundGradient className="relative w-full max-w-[1200px] mx-auto md:mx-8 lg:mx-auto [mask-image:linear-gradient(to_top,transparent_0%,black_2%)] lg:[mask-image:linear-gradient(to_top,transparent_0%,black_40%)] border-1 lg:border-2 border-red-500/50 rounded-xl lg:rounded-2xl overflow-hidden outline outline-red-500 outline-offset-1 p-1 mb-0">
        <BorderBeam />
        {/* Gradient glow effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-red-500 blur-3xl animate-radial-gradient" />
        </div>

        <div className="relative">
          <Image
            src="/images/hero-image.png"
            alt="Hero Image showcasing social media content creation interface"
            width={1200}
            height={720}
            priority
            className="w-full h-auto object-cover rounded-xl"
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 1200px"
            quality={90}
            loading="eager"
            onError={(e) => {
              console.error("Error loading image:", e);
            }}
          />
        </div>
      </BackgroundGradient>
    </div>
  );
}
