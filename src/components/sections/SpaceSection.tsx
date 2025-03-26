import Image from 'next/image';
import Link from 'next/link';

// Placeholder images - Ensure these exist in public/images
const spaceImages = [
  { src: "/images/space1.jpg", alt: "禅修室" },
  { src: "/images/space2.jpg", alt: "茶室" },
  { src: "/images/space3.jpg", alt: "休息区" },
];

const SpaceSection = () => {
  return (
    <section id="space" className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-brand-dark">
            学院空间
          </h2>
          <p className="text-gray-600 md:text-lg">
            宁静雅致，沉浸体验
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
          {spaceImages.map((image, index) => (
            <div key={index} className="relative aspect-video overflow-hidden rounded-lg shadow-md">
              {/* Aspect ratio ensures consistent shape */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="transition-transform duration-300 hover:scale-105" // Subtle zoom on hover
              />
            </div>
          ))}
        </div>

        {/* Description and CTA */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-gray-700 md:text-lg">
            我们精心打造了融合东方美学与现代舒适感的线下空间，包括明亮的禅修室、静谧的茶室以及舒适的交流区。每一处细节都旨在帮助您放松身心，更好地投入学习与内观。
          </p>
          <div>
            {/* Replace with Shadcn <Button> later */}
            <Link
              href="mailto:info@fanmu.com?subject=预约参观学院空间"
              className="inline-flex h-11 items-center justify-center rounded-md bg-brand-brown px-10 text-base font-medium text-gray-50 shadow transition-colors hover:bg-brand-brown/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              预约参观
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;