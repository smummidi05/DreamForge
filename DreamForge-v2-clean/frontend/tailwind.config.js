/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // DreamForge Elder-Focused Color Palette
        lavender: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#53355A', // Primary
          600: '#7c6ba3',
          700: '#6d5c8e',
          800: '#5e4d79',
          900: '#4f3e64',
        },
        coral: {
          50: '#fff5f3',
          100: '#ffe8e3',
          200: '#ffd1c7',
          300: '#ffb4a3',
          400: '#C57022', // Secondary
          500: '#ff7659',
          600: '#f05e40',
          700: '#d94727',
          800: '#c23010',
          900: '#ab1900',
        },
        lightPurple: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#C5AFCF', // Accent
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        cream: '#F5F1E8',
        warmGray: '#E5E1DA',
        navy: '#2C3E50',
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Larger base sizes for elder accessibility
        'base': '18px',
        'lg': '20px',
        'xl': '22px',
        '2xl': '26px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '50px',
      },
      lineHeight: {
        relaxed: '1.6',
        loose: '1.8',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
