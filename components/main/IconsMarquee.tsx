import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    img: "https://avatar.vercel.sh/jack",
    name: "Jack",
  },
  {
    img: "https://avatar.vercel.sh/jill",
    name: "Jill",
  },
  {
    img: "https://avatar.vercel.sh/john",
    name: "John",
  },
  {
    img: "https://avatar.vercel.sh/jane",
    name: "Jane",
  },
  {
    img: "https://avatar.vercel.sh/jenny",
    name: "Jenny",
  },
  {
    img: "https://avatar.vercel.sh/james",
    name: "James",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-60 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}>
      <div className="flex flex-row items-center gap-4">
        <Image
          className="rounded-lg"
          width="100"
          height="100"
          alt=""
          src={img}
        />
        <div className="flex">
          <figcaption className="text-2xl font-bold dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function IconsMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl py-10 pt-20">
      <div className="absolute inset-0 z-10 bg-white dark:bg-black pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)]" />
      <div className="relative z-20 pb-8">
        <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text pt-4 pb-8 text-2xl font-bold text-transparent sm:py-8 sm:text-4xl flex items-center gap-2">
          Integrated with your favorite tools
        </h1>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
