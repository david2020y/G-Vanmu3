import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">联系我们</h3>
            <p className="mb-2">电话: [你的电话号码]</p>
            <p className="mb-2">邮箱: info@fanmu.com</p>
            <p>地址: [你的地址]</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">快速链接</h3>
            <ul>
              <li className="mb-2"><Link href="/#courses" className="hover:text-white">课程</Link></li>
              <li className="mb-2"><Link href="/#events" className="hover:text-white">活动</Link></li>
              <li className="mb-2"><Link href="/#space" className="hover:text-white">空间</Link></li>
              <li className="mb-2"><Link href="/#about" className="hover:text-white">关于我们</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">关注我们</h3>
            <div className="flex space-x-4">
              {/* Replace with actual social icons/links */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">[微博]</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">[微信]</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">[小红书]</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} 梵慕学院. All Rights Reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="hover:text-white mx-2">隐私政策</Link> |
            <Link href="/terms" className="hover:text-white mx-2">服务条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;