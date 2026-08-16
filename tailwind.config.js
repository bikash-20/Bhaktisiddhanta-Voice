/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Spiritual Indian palette tuned to the temple/hero imagery vibe.
        // Inspired by maroon/terracotta flame, royal & sky blue, gold leaf, cream.
        saffron: {
          50: "#fff8ed",
          100: "#fdebd0",
          200: "#fad4a0",
          300: "#f6b365",
          400: "#f08f33",
          500: "#e07413",
          600: "#bd5a0d",
          700: "#97440d",
          800: "#7c380f",
          900: "#682f10",
        },
        maroon: {
          50: "#fdf3f3",
          100: "#fbe6e6",
          200: "#f4c5c5",
          300: "#e89696",
          400: "#d76a6a",
          500: "#b34040",
          600: "#923131",
          700: "#762929",
          800: "#612525",
          900: "#4f2121",
        },
        royal: {
          50: "#f1f5fb",
          100: "#dde6f3",
          200: "#bdcfe7",
          300: "#8fadd4",
          400: "#5e84bb",
          500: "#3e63a0",
          600: "#2f4e85",
          700: "#28406c",
          800: "#24375a",
          900: "#1f2f4d",
          950: "#142036",
        },
        gold: {
          50: "#fdf9ec",
          100: "#fbf0c7",
          200: "#f6e08a",
          300: "#f0c94d",
          400: "#e8b022",
          500: "#cc921a",
          600: "#a87016",
          700: "#875415",
          800: "#6f4418",
          900: "#5d3a18",
        },
        cream: {
          50: "#fdfaf3",
          100: "#faf3e0",
          200: "#f3e6c2",
          300: "#ead29a",
          400: "#e0bc72",
          500: "#d6a64c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mantra: ["var(--font-mantra)", "Georgia", "serif"],
      },
      boxShadow: {
        "soft": "0 10px 40px -10px rgba(31, 47, 77, 0.15)",
        "glow": "0 0 30px rgba(232, 176, 34, 0.35)",
      },
      backgroundImage: {
        "mantra-gradient": "linear-gradient(135deg, #b34040 0%, #cc921a 50%, #28406c 100%)",
        "warm-fade": "linear-gradient(180deg, rgba(253,250,243,0) 0%, rgba(253,250,243,1) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};
