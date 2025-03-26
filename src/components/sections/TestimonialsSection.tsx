'use client'; // <--- 添加这一行!
import { motion } from "framer-motion"; // 导入 motion

const testimonials = [ /* ...学员感言数据保持不变... */
  { quote: "在梵慕的学习让我找到了内心的平静，也学会了如何更优雅地生活。老师们的引导非常有力量。", author: "学员 - 张女士", },
  { quote: "这里的课程内容深入浅出，将深奥的禅理讲得非常贴近生活。环境也让人感觉特别放松和舒适。", author: "学员 - 李先生", },
  { quote: "参加了周末静修营，感觉像是给心灵做了一次深度SPA，重新充满了能量。强烈推荐！", author: "学员 - 王小姐", },
];

const TestimonialsSection = () => {
  // 动画变体
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }, // 错开更多
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 }, // 从稍小尺寸出现
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section // <-- 改为 motion.section
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
            学员感言
          </h2>
          <p className="text-gray-600 md:text-lg">
            听听他们的心声与收获
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            // 感言卡片动画
            <motion.div
              key={index}
              className="p-6 bg-brand-beige rounded-lg shadow-sm border-l-4 border-brand-brown"
              variants={itemVariants} // 应用 item 动画
            >
              <blockquote className="relative">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <footer className="text-right text-sm font-medium text-brand-dark">
                  — {testimonial.author}
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;