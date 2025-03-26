'use client'; // <--- 添加这一行!
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // 导入 motion

const spaceImages = [ /* ...图片数据保持不变... */
  { src: "/images/space1.png", alt: "禅修室" }, { src: "/images/space2.png", alt: "茶室" }, { src: "/images/space3.png", alt: "休息区" },
];

const SpaceSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 }, // 从稍小尺寸出现
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section // <-- 改为 motion.section
      id="space"
      className="w-full py-16 md:py-24 lg:py-32 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container px-4 md:px-6">
        <motion.div // 标题动画
           className="max-w-3xl mx-auto text-center space-y-4 mb-12"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-brand-dark">
            学院空间
          </h2>
          <p className="text-gray-600 md:text-lg">
            宁静雅致，沉浸体验
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
          {spaceImages.map((image, index) => (
            // 图片动画
            <motion.div
              key={index}
              className="relative aspect-video overflow-hidden rounded-lg shadow-md group"
              variants={itemVariants} // 应用 item 动画
            >
              <Image src={image.src} alt={image.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="transition-transform duration-300 group-hover:scale-105" />
            </motion.div>
          ))}
        </div>

        <motion.div // 描述和按钮动画
           className="max-w-3xl mx-auto text-center space-y-6"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }} // 稍微延迟
        >
          <p className="text-gray-700 md:text-lg">
            我们精心打造了融合东方美学与现代舒适感的线下空间，包括明亮的禅修室、静谧的茶室以及舒适的交流区。每一处细节都旨在帮助您放松身心，更好地投入学习与内观。
          </p>
          <div>
            <Button asChild size="lg" className="bg-brand-brown hover:bg-brand-brown/90">
              <Link href="mailto:info@fanmu.com?subject=预约参观学院空间">预约参观</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SpaceSection;