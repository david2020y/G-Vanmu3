
'use client'; // <--- 添加这一行!

// 删除重复的 Link 导入，因为在文件后面已经导入过了
import { Button } from "@/components/ui/button";
// 删除重复的 motion 导入，因为在文件后面已经有相同的导入

// ... (组件剩余代码保持不变) ...

const HeroSection = () => {
  // ...
};

// 删除重复的默认导出，因为文件末尾已经有 export default EventsSection
import Link from 'next/link';
import { motion } from "framer-motion"; // 导入 motion

const upcomingEvents = [ /* ...活动数据保持不变... */
  { date: "2024年 5月 18-19日", title: "周末正念静修营", description: "沉浸式体验正念练习，深度放松身心，提升专注与觉察力。", link: "mailto:info@fanmu.com?subject=报名：周末正念静修营" },
  { date: "2024年 6月 8日 (周六下午)", title: "《禅与生活艺术》主题讲座", description: "探讨如何将禅的智慧应用于日常工作与生活，提升幸福感。", link: "mailto:info@fanmu.com?subject=报名：《禅与生活艺术》讲座" },
  { date: "2024年 6月 22日 (周六上午)", title: "茶道美学体验沙龙", description: "学习基础茶道礼仪，品味不同茶韵，感受茶事中的宁静之美。", link: "mailto:info@fanmu.com?subject=报名：茶道美学体验沙龙" },
];

const EventsSection = () => {
  // 动画变体
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }, // 让子元素错开出现
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -30 }, // 从左侧移入
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section // <-- 改为 motion.section
      id="events"
      className="w-full py-16 md:py-24 lg:py-32 bg-brand-beige"
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
            近期活动
          </h2>
          <p className="text-gray-600 md:text-lg">
            与我们一起，体验更多精彩
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {upcomingEvents.map((event, index) => (
            // 活动项动画
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-200"
              variants={itemVariants} // 应用 item 动画
            >
              <p className="text-sm font-medium text-brand-brown mb-2">{event.date}</p>
              <h3 className="text-xl font-semibold mb-3 text-brand-dark">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <Link
                href={event.link}
                className="text-sm font-medium text-brand-brown hover:underline"
              >
                了解详情 & 报名 →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EventsSection;