// Placeholder data - Replace with data from Sanity CMS later
const testimonials = [
    {
      quote: "在梵慕的学习让我找到了内心的平静，也学会了如何更优雅地生活。老师们的引导非常有力量。",
      author: "学员 - 张女士",
      // image: "/images/testimonial1.jpg" // Optional image
    },
    {
      quote: "这里的课程内容深入浅出，将深奥的禅理讲得非常贴近生活。环境也让人感觉特别放松和舒适。",
      author: "学员 - 李先生",
      // image: "/images/testimonial2.jpg" // Optional image
    },
    {
      quote: "参加了周末静修营，感觉像是给心灵做了一次深度SPA，重新充满了能量。强烈推荐！",
      author: "学员 - 王小姐",
      // image: "/images/testimonial3.jpg" // Optional image
    },
  ];
  
  const TestimonialsSection = () => {
    return (
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-brand-dark">
              学员感言
            </h2>
            <p className="text-gray-600 md:text-lg">
              听听他们的心声与收获
            </p>
          </div>
  
          {/* Grid layout for testimonials - Consider a carousel later for more items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
               // Replace with Shadcn <Card> component later
              <div key={index} className="p-6 bg-brand-beige rounded-lg shadow-sm border-l-4 border-brand-brown">
                {/* Optional: Add image here */}
                {/* {testimonial.image && <Image src={testimonial.image} ... />} */}
                <blockquote className="relative">
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <footer className="text-right text-sm font-medium text-brand-dark">
                    — {testimonial.author}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;