'use client'; // <--- 添加这一行!

// 删除重复的 Link 导入，因为在下方已经有相同的导入语句
// 删除重复的 Button 导入，因为在下方已经有相同的导入语句
// 删除重复的 motion 导入，因为在下方已经有相同的导入语句

// ... (组件剩余代码保持不变) ...

// 删除重复的 HeroSection 组件声明
  // ...
// 删除多余的大括号，因为这里不需要闭合任何代码块

// 删除重复的默认导出，因为在文件末尾已有一个默认导出
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // 1. 导入 motion

const HeroSection = () => {
  // 定义动画变体 (可选，让代码更清晰)
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // 2. 使用 motion.section 并应用动画变体
    <motion.section
      className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-brand-beige via-white to-white"
      initial="hidden" // 初始状态为 hidden
      whileInView="visible" // 进入视口时变为 visible
      viewport={{ once: true, amount: 0.2 }} // 触发一次，可见 20% 时触发
      transition={{ duration: 0.6, ease: "easeOut" }} // 整体动画效果
      variants={sectionVariants} // 应用上面定义的变体
    >
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* 内部元素也可以应用动画，并添加延迟 */}
          <motion.h1
            className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-brand-dark"
            variants={itemVariants} // 应用 item 变体
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} // 稍作延迟
          >
            静心观己，优雅生活
          </motion.h1>
          <motion.p
             className="text-lg text-gray-600 md:text-xl lg:text-2xl"
             variants={itemVariants}
             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            在梵慕学院，探索东方禅修智慧与现代生活美学的融合
          </motion.p>
          <motion.div
             className="pt-4"
             variants={itemVariants}
             transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Button asChild size="lg" className="bg-brand-brown hover:bg-brand-brown/90">
              <Link href="/#courses">了解更多课程</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;