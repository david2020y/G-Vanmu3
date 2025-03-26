import Link from 'next/link';
// Import Shadcn NavigationMenu later if needed
// import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 font-bold">
            {/* Replace with SVG Logo later */}
            <span>[梵慕 Logo]</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/#courses" className="transition-colors hover:text-foreground/80 text-foreground/60">课程</Link>
            <Link href="/#events" className="transition-colors hover:text-foreground/80 text-foreground/60">活动</Link>
            <Link href="/#space" className="transition-colors hover:text-foreground/80 text-foreground/60">空间</Link>
            <Link href="/#about" className="transition-colors hover:text-foreground/80 text-foreground/60">关于我们</Link>
          </nav>
        </div>
        {/* Add Mobile Menu Button and Sheet Drawer later */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Placeholder for Search, Login/Register */}
        </div>
      </div>
    </header>
  );
};

export default Header;