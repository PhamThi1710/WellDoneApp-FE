import { Config } from "tailwindcss";

const config: Config = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
          800: "#3f6212",
          900: "#365314",
        },
        secondary: {
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        neutral: {
          100: "#fdfdfd",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#0a0a0a",
        },
        success: {
          100: "#dcfce7",
          400: "#4ade80",
          600: "#16a34a",
          700: "#15803d",
          900: "#14532d",
        },
        danger: {
          100: "#fee2e2",
          400: "#f87171",
          600: "#dc2626",
          700: "#b91c1c",
          900: "#7f1d1d",
        },
        warning: {
          100: "#fef9c3",
          400: "#facc15",
          600: "#ca8a04",
          700: "#a16207",
          900: "#713f12",
        },
      },
      fontFamily: {
        sans: ["Be Vietnam", "sans-serif"],
      },
      fontSize: {
        heading1: ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        heading2: ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        heading3: ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        heading4: ["24px", { lineHeight: "1.2", fontWeight: "600" }],
        "body-large-bold": ["20px", { fontWeight: "700" }],
        "body-large-semibold": ["20px", { fontWeight: "600" }],
        "body-large-medium": ["20px", { fontWeight: "500" }],
        "body-large-regular": ["20px", { fontWeight: "400" }],
        "body-base-bold": ["16px", { fontWeight: "700" }],
        "body-base-semibold": ["16px", { fontWeight: "600" }],
        "body-base-medium": ["16px", { fontWeight: "500" }],
        "body-base-regular": ["16px", { fontWeight: "400" }],
        "body-small-bold": ["12px", { fontWeight: "700" }],
        "body-small-semibold": ["12px", { fontWeight: "600" }],
        "body-small-medium": ["12px", { fontWeight: "500" }],
        "body-small-regular": ["12px", { fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};

<<<<<<< HEAD
export default config;
=======
export default config;
>>>>>>> master
