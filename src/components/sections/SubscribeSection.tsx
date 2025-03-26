'use client'; // <--- 添加这一行!
import Link from 'next/link';
import { Button } from "@/components/ui/button"; // 导入 Button
import { motion } from "framer-motion"; // 导入 motion

const SubscribeSection = () => {
  // 动画变体
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.section // <-- 改为 motion.section
      id="subscribe"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-t from-brand-beige via-white to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-brand-dark">
            保持联系
          </h2>
          <p className="text-gray-600 md:text-lg">
            订阅我们的邮件列表，第一时间获取最新的课程、活动资讯和禅修智慧分享。我们承诺不发送垃圾邮件。
          </p>

          <div className="pt-4">
            {/* 使用 Shadcn Button 并添加动画 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }} // 稍微延迟出现
            >
              <Button asChild size="lg" className="bg-brand-brown hover:bg-brand-brown/90">
                <Link href="mailto:subscribe@fanmu.com?subject=订阅梵慕学院资讯&body=你好，我想订阅梵慕学院的邮件资讯。">
                  点击通过邮件订阅
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* 真实表单的占位符保持不变 */}
          {/* ... */}

        </div>
      </div>
    </motion.section>
  );
};

export default SubscribeSection;