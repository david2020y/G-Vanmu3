import Link from 'next/link';

const SubscribeSection = () => {
  return (
    <section id="subscribe" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-t from-brand-beige via-white to-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-brand-dark">
            保持联系
          </h2>
          <p className="text-gray-600 md:text-lg">
            订阅我们的邮件列表，第一时间获取最新的课程、活动资讯和禅修智慧分享。我们承诺不发送垃圾邮件。
          </p>

          {/* Simple mailto link version */}
          <div className="pt-4">
             {/* Replace with Shadcn <Button> later */}
            <Link
              href="mailto:subscribe@fanmu.com?subject=订阅梵慕学院资讯&body=你好，我想订阅梵慕学院的邮件资讯。" // Pre-fills email
              className="inline-flex h-11 items-center justify-center rounded-md bg-brand-brown px-10 text-base font-medium text-gray-50 shadow transition-colors hover:bg-brand-brown/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              点击通过邮件订阅
            </Link>
          </div>

          {/* Placeholder for a real form - Requires API route and client component */}
          {/*
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
             // Replace with Shadcn <Input> later
            <input
              type="email"
              placeholder="输入您的邮箱地址"
              required
              className="flex-grow h-11 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
             // Replace with Shadcn <Button> later
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md bg-brand-brown px-6 text-base font-medium text-gray-50 shadow transition-colors hover:bg-brand-brown/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              立即订阅
            </button>
          </form>
          <p className="text-xs text-gray-500">
            提交即表示您同意我们的 <Link href="/privacy" className="underline">隐私政策</Link>.
          </p>
          */}

        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;