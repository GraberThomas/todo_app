import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
    colors: {
      card: "var(--card-background)",
      text_disabled: "var(--text-disabled)",
      text_light: "var(--text-light)",
      text: "var(--text)",
      text_link_active: "var(--text-link-active)",
      background: "var(--background)",
      primary: "var(--primary)",
      check_background: "var(--check-background)",
    }
  },
  plugins: [],
}
export default config
