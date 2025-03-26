import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"], // 确保 darkMode 设置为 class
  content: [
    './pages/**/*.{ts,tsx}', // 虽然不用 pages 目录，留着也无妨
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}', // 确保扫描 src 目录下的所有相关文件
	],
  prefix: "", // 通常不需要前缀
  theme: {
    container: {
      center: true,
      padding: "2rem", // 容器默认 padding
      screens: {
        "2xl": "1400px", // 容器最大宽度
      },
    },
    extend: { // 扩展默认主题
      colors: { // 这里定义的颜色可以直接用，比如 bg-brand-beige
        'brand-beige': '#fdfbf7',
        'brand-brown': '#8a7d60',
        'brand-dark': '#4a4a4a',
         // Shadcn UI 的颜色 (如 background, foreground) 是通过 CSS 变量定义的
         // 不需要在这里定义，而是由 globals.css 中的变量控制
         // 例如：bg-background 会去找 --background 变量
      },
      keyframes: { // Shadcn UI 可能需要的动画 keyframes
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: { // Shadcn UI 可能需要的动画类
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: { // Shadcn UI 会用到 CSS 变量定义圆角
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: { // 如果你想用 CSS 变量控制字体
         // sans: ["var(--font-sans)", ...fontFamily.sans], // 示例
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Shadcn UI 必需的动画插件
} satisfies Config

export default config