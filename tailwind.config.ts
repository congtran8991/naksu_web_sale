import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        slide: "40rem", // Đặt giá trị height của bạn tại đây (ví dụ: 30rem)
      },
      screens: {
        mn: "100px",
        sm: "480px", // Mặc định của Tailwind (Small devices - smartphones)
        md: "768px", // Mặc định của Tailwind (Medium devices - tablets)
        lg: "1024px", // Mặc định của Tailwind (Large devices - desktops)
        xl: "1170px", // Mặc định của Tailwind (Extra large devices - larger desktops)
        "2xl": "1236px", // Mặc định của Tailwind (Extra extra large devices)
      },
    },
  },
  plugins: [],
};
export default config;
