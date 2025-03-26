// You can use Framer Motion here later
// import { motion } from "framer-motion";
import Link from 'next/link';
// import { Button } from "@/components/ui/button"; // Use Shadcn Button later

const HeroSection = () => {
  return (
    // Use motion.section later for animation
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-brand-beige to-white">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
           {/* Use motion.h1 later */}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-brand-dark">
            静心观己，优雅生活
          </h1>
           {/* Use motion.p later */}
          <p className="text-lg text-gray-600 md:text-xl">
            在梵慕学院，探索东方禅修智慧与现代生活美学的融合
          </p>
          {/* Use motion.div later */}
          <div>
             {/* Replace with Shadcn Button later */}
            <Link
              href="/#courses"
              className="inline-flex h-10 items-center justify-center rounded-md bg-brand-brown px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-brand-brown/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              了解更多课程
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;