const ConceptSection = () => {
    return (
      // Alternating background color for visual separation
      <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-brand-dark">
              学院理念
            </h2>
            <p className="text-gray-600 md:text-lg">
              我们的核心价值与愿景
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-left md:text-lg text-gray-700 space-y-6">
            <p>
              梵慕学院致力于为追求<strong className="font-semibold text-brand-dark">精神成长</strong>与<strong className="font-semibold text-brand-dark">优雅生活方式</strong>的现代人，提供一个结合东方禅修智慧与现代生活美学的学习与交流平台。
            </p>
            <p>
              我们相信，内心的宁静与外在的雅致相辅相成。通过系统性的课程与实践，我们引导学员<strong className="font-semibold text-brand-dark">观照内心、提升觉知</strong>，同时培养对生活细节的<strong className="font-semibold text-brand-dark">审美感知</strong>与<strong className="font-semibold text-brand-dark">创造能力</strong>。
            </p>
            <p>
              在梵慕，您将学会在喧嚣的世界中找到<strong className="font-semibold text-brand-dark">内心的平衡点</strong>，将禅的智慧融入日常，以更加<strong className="font-semibold text-brand-dark">从容、专注、优雅</strong>的态度面对生活。
            </p>
            {/* You can add Founder/Tutor info here later */}
            {/* <div className="mt-8 pt-8 border-t">
               <h3 className="text-xl font-semibold mb-4 text-center text-brand-dark">创始人寄语</h3>
               <p className="italic text-center">"..."</p>
            </div> */}
          </div>
        </div>
      </section>
    );
  };
  
  export default ConceptSection;