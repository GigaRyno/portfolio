import { access } from "fs"
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",      
    },
    screens: {
      smmobile: "375px",
      mobile: "500px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "1500px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
      sans: ["var(--font-roboto)"],
    },
    extend: {
      colors : {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187'
        },
        accent_pink: {
          DEFAULT: '#F72585',
        },
        accent_purple: {
          DEFAULT: '#7209b7',
        },
        accent_navy: {
          DEFAULT: '#3a0ca3',
        },
        accent_blue: {
          DEFAULT: '#4361ee',
        },
        accent_light_blue: {
          DEFAULT: '#4cc9f0',
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config