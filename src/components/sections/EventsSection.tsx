import Link from 'next/link';

// Placeholder data - Replace with data from Sanity CMS later
const upcomingEvents = [
  {
    date: "2024年 5月 18-19日",
    title: "周末正念静修营",
    description: "沉浸式体验正念练习，深度放松身心，提升专注与觉察力。",
    link: "mailto:info@fanmu.com?subject=报名：周末正念静修营"
  },
  {
    date: "2024年 6月 8日 (周六下午)",
    title: "《禅与生活艺术》主题讲座",
    description: "探讨如何将禅的智慧应用于日常工作与生活，提升幸福感。",
    link: "mailto:info@fanmu.com?subject=报名：《禅与生活艺术》讲座"
  },
  {
    date: "2024年 6月 22日 (周六上午)",
    title: "茶道美学体验沙龙",
    description: "学习基础茶道礼仪，品味不同茶韵，感受茶事中的宁静之美。",
    link: "mailto:info@fanmu.com?subject=报名：茶道美学体验沙龙"
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="w-full py-16 md:py-24 lg:py-32 bg-brand-beige">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-brand-dark">
            近期活动
          </h2>
          <p className="text-gray-600 md:text-lg">
            与我们一起，体验更多精彩
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Event details */}
              <p className="text-sm font-medium text-brand-brown mb-2">{event.date}</p>
              <h3 className="text-xl font-semibold mb-3 text-brand-dark">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              {/* Registration link */}
              <Link
                href={event.link}
                className="text-sm font-medium text-brand-brown hover:underline"
              >
                了解详情 & 报名 →
              </Link>
            </div>
          ))}
        </div>

         {/* Optional: Button to view all events */}
        {/* <div className="text-center mt-12">
          <Link href="/all-events" className="...">查看所有活动</Link>
        </div> */}
      </div>
    </section>
  );
};

export default EventsSection;