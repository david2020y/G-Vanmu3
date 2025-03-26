import Image from 'next/image'; // Using Next.js Image component for optimization
import Link from 'next/link';

// Placeholder data - Replace with data from Sanity CMS later
const featuredCourses = [
  {
    title: "正念冥想入门",
    description: "学习基础冥想技巧，培养专注力，释放压力，回归当下。",
    image: "/images/course1.jpg", // Ensure this image exists in public/images
    link: "mailto:info@fanmu.com?subject=咨询：正念冥想入门",
    price: "¥XXX"
  },
  {
    title: "生活美学与茶道",
    description: "在茶香袅袅中体会仪式感，提升生活品味与内在涵养。",
    image: "/images/course2.jpg", // Ensure this image exists in public/images
    link: "mailto:info@fanmu.com?subject=咨询：生活美学与茶道",
    price: "¥XXX"
  },
  {
    title: "禅意插花艺术",
    description: "通过插花感悟自然之美，观察无常，表达内心宁静。",
    image: "/images/course3.jpg", // Ensure this image exists in public/images
    link: "mailto:info@fanmu.com?subject=咨询：禅意插花艺术",
    price: "¥XXX"
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="w-full py-16 md:py-24 lg:py-32 bg-brand-beige">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-brand-dark">
            精选课程
          </h2>
          <p className="text-gray-600 md:text-lg">
            开启你的禅修与美学之旅
          </p>
        </div>

        {/* Grid layout for course cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            // Replace with Shadcn <Card> component later for better structure/style
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow hover:shadow-lg">
              <div className="relative w-full h-56"> {/* Fixed height container for image */}
                <Image
                  src={course.image}
                  alt={course.title}
                  fill // Makes image fill the container
                  style={{ objectFit: 'cover' }} // Scales image nicely
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Helps Next.js optimize image loading
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>
                {/* <p className="text-brand-brown font-semibold mb-4">{course.price}</p> */}
                {/* Replace with Shadcn <Button> later */}
                <Link
                  href={course.link}
                  className="mt-auto inline-block text-center w-full rounded-md bg-transparent border border-brand-brown px-4 py-2 text-sm font-medium text-brand-brown shadow-sm transition-colors hover:bg-brand-brown/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  咨询详情
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Button to view all courses */}
        {/* <div className="text-center mt-12">
          <Link href="/all-courses" className="...">查看全部课程</Link>
        </div> */}
      </div>
    </section>
  );
};

export default CoursesSection;