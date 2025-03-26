import Link from 'next/link';
import Image from 'next/image'; // 导入 Next.js 的 Image 组件

// Header 组件定义
const Header = () => {
  return (
    // sticky: 固定在顶部
    // top-0: 距离顶部 0
    // z-50: 设置层级，确保在其他内容之上
    // w-full: 宽度 100%
    // border-b: 底部边框
    // bg-background/95: 背景色（来自 globals.css 或 shadcn），带透明度
    // backdrop-blur: 背景模糊效果
    // supports-[backdrop-filter]:bg-background/60: 在支持 backdrop-filter 的浏览器上应用不同的背景透明度
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* container: 限制内容最大宽度并居中 (来自 tailwind.config.ts) */}
      {/* flex: 使用 Flexbox 布局 */}
      {/* h-16: 设置固定高度 (16 * 0.25rem = 4rem = 64px) */}
      {/* items-center: Flex 项目垂直居中 */}
      <div className="container flex h-16 items-center">

        {/* Logo 和主要导航区域 */}
        {/* mr-4: 右边距 */}
        {/* flex: 使用 Flexbox */}
        <div className="mr-4 flex">
          {/* Logo 链接到首页 */}
          {/* mr-6: 右边距 */}
          {/* flex items-center: 内部元素垂直居中 */}
          {/* space-x-2: 子元素水平间距 */}
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* 使用 Next.js Image 组件显示 SVG Logo */}
            <Image
              src="/images/logo.svg" // SVG 文件路径 (相对于 public 目录)
              alt="梵慕学院 Logo"     // 图片替代文本，用于 SEO 和可访问性
              width={180}             // 设置图片宽度 (需要根据你的 SVG 实际观感调整)
              height={40}            // 设置图片高度 (需要根据你的 SVG 实际观感调整)
              priority               // 优先加载此图片 (因为 Logo 很重要)
              unoptimized={true}     // 对于 SVG，有时需要设置 unoptimized 为 true，避免 Next.js 的默认优化干扰显示，可以尝试不加或者加
            />
          </Link>

          {/* 桌面端导航菜单 */}
          {/* hidden: 默认隐藏 */}
          {/* md:flex: 在中等屏幕及以上尺寸 (md breakpoint) 显示为 flex 布局 */}
          {/* items-center: 垂直居中 */}
          {/* space-x-6: 导航项之间的水平间距 */}
          {/* text-sm: 字体大小 */}
          {/* font-medium: 字体粗细 */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {/*
              transition-colors: 颜色变化过渡效果
              hover:text-foreground/80: 鼠标悬停时文字颜色变化 (带透明度)
              text-foreground/60: 默认文字颜色 (带透明度)
            */}
            <Link href="/#courses" className="transition-colors hover:text-foreground/80 text-foreground/60">课程</Link>
            <Link href="/#events" className="transition-colors hover:text-foreground/80 text-foreground/60">活动</Link>
            <Link href="/#space" className="transition-colors hover:text-foreground/80 text-foreground/60">空间</Link>
            <Link href="/#about" className="transition-colors hover:text-foreground/80 text-foreground/60">关于我们</Link>
          </nav>
        </div>

        {/* 移动端菜单按钮 和 其他右侧项目 (占位) */}
        {/* flex-1: 占据剩余空间 */}
        {/* items-center: 垂直居中 */}
        {/* justify-end: 内容靠右对齐 */}
        {/* space-x-4: 子元素水平间距 */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* TODO: 在这里添加移动端菜单按钮 (通常使用 Sheet/Drawer 组件) */}
          {/* 例如: <MobileNav /> */}

          {/* TODO: 在这里添加搜索、登录/注册等按钮 (如果需要) */}
          {/* 例如: <SearchButton /> <UserButton /> */}
        </div>
      </div>
    </header>
  );
};

// 导出 Header 组件，以便在 layout.tsx 中使用
export default Header;