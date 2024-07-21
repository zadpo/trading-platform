import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        bottlegreen: {
          "50": "#f1fcf6",
          "100": "#defaed",
          "200": "#bff3db",
          "300": "#8de8c0",
          "400": "#54d49c",
          "500": "#2dba7c",
          "600": "#1f9a64",
          "700": "#1c7951",
          "800": "#1b6042",
          "900": "#184f39",
          "950": "#0a3826",
        },
        driftwood: {
          "50": "#f8f5ee",
          "100": "#efe8d2",
          "200": "#e0d0a8",
          "300": "#ceb276",
          "400": "#bf9750",
          "500": "#a67d3f",
          "600": "#976937",
          "700": "#79502f",
          "800": "#66422d",
          "900": "#58392b",
          "950": "#321e16",
        },
        azureradiance: {
          "50": "#eff5ff",
          "100": "#dbe8fe",
          "200": "#bfd7fe",
          "300": "#93bbfd",
          "400": "#609afa",
          "500": "#3b82f6",
          "600": "#2570eb",
          "700": "#1d64d8",
          "800": "#1e55af",
          "900": "#1e478a",
          "950": "#172e54",
        },
        emerald: {
          "50": "#f0fdf5",
          "100": "#dcfce8",
          "200": "#bbf7d1",
          "300": "#86efad",
          "400": "#4ade80",
          "500": "#22c55e",
          "600": "#16a34a",
          "700": "#15803c",
          "800": "#166533",
          "900": "#14532b",
          "950": "#052e14",
        },
        orangepeel: {
          "50": "#fff8eb",
          "100": "#feeac7",
          "200": "#fdd28a",
          "300": "#fcbb4d",
          "400": "#fbab24",
          "500": "#f59e0b",
          "600": "#d98b06",
          "700": "#b47409",
          "800": "#92610e",
          "900": "#78510f",
          "950": "#452c03",
        },
        coralred: {
          "50": "#fef2f2",
          "100": "#fee2e2",
          "200": "#fecaca",
          "300": "#fca5a5",
          "400": "#f87171",
          "500": "#ef4444",
          "600": "#dc2626",
          "700": "#b91c1c",
          "800": "#991b1b",
          "900": "#7f1d1d",
          "950": "#450a0a",
        },
        lynch: {
          "50": "#f6f7f9",
          "100": "#eceef2",
          "200": "#d5d9e2",
          "300": "#b1bbc8",
          "400": "#8695aa",
          "500": "#64748b",
          "600": "#526077",
          "700": "#434e61",
          "800": "#3a4252",
          "900": "#343a46",
          "950": "#23272e",
        },
        baseblack: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#000000",
        },
        basewhite: {
          "50": "#ffffff",
          "100": "#efefef",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
        },
      },
      fontFamily: {
        anton: ["anton", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
} satisfies Config;

export default config;
