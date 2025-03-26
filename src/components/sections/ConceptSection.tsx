'use client'; // <--- 添加这一行!

// 删除重复的Link导入，因为在下方已经有相同的导入声明
// 删除重复的Button导入，因为在下方已经有相同的导入声明
// 删除重复的motion导入，因为在下方已经有相同的导入声明

// ... (组件剩余代码保持不变) ...

const HeroSection = () => {
  // ...
};

// 删除重复的默认导出，因为文件末尾已经有 export default CoursesSection
import Image from 'next/image';
import Link from 'next/link';
// 导入 Shadcn Card 和 Button
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // 导入 motion

// 课程数据
const featuredCourses = [
  {
    title: "正念冥想入门",
    description: "学习基础冥想技巧，培养专注力，释放压力，回归当下。",
    image: "/images/course1.png", // 相对于 public 目录的路径
    link: "mailto:info@fanmu.com?subject=咨询：正念冥想入门",
  },
  {
    title: "生活美学与茶道",
    description: "在茶香袅袅中体会仪式感，提升生活品味与内在涵养。",
    image: "/images/course2.png",
    link: "mailto:info@fanmu.com?subject=咨询：生活美学与茶道",
  },
  {
    title: "禅意插花艺术",
    description: "通过插花感悟自然之美，观察无常，表达内心宁静。",
    image: "/images/course3.png",
    link: "mailto:info@fanmu.com?subject=咨询：禅意插花艺术",
  },
];

const CoursesSection = () => {
  // 动画变体
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }, // 让子元素错开出现
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section // 添加动画
      id="courses"
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
            精选课程
          </h2>
          <p className="text-gray-600 md:text-lg">
            开启你的禅修与美学之旅
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <motion.div key={index} variants={cardVariants}> {/* 卡片动画 */}
              {/* 使用 Shadcn Card */}
              <Card className="flex flex-col overflow-hidden h-full transition-shadow hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative w-full aspect-[16/10]">
                    {/* 使用 Next Image */}
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <CardTitle className="text-xl font-semibold mb-2 text-brand-dark">{course.title}</CardTitle>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto">
                  {/* 使用 Shadcn Button */}
                  <Button asChild variant="outline" className="w-full border-brand-brown text-brand-brown hover:bg-brand-brown/10 hover:text-brand-brown">
                    <Link href={course.link}>咨询详情</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoursesSection;