/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E8630A',
          'orange-hover': '#CF5709',
          gold: '#F5A623',
          navy: '#0B1D3A',
          'navy-mid': '#1A3A5C',
          blue: '#1565C0',
          'blue-light': '#E8F0FE',
          cream: '#F8FAFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(11,29,58,0.08)',
        'card-hover': '0 12px 40px rgba(11,29,58,0.16)',
        glow: '0 0 40px rgba(232,99,10,0.2)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B1D3A 0%, #1A3A5C 50%, #0D2137 100%)',
        'orange-gradient': 'linear-gradient(135deg, #E8630A 0%, #F5A623 100%)',
        'blue-gradient': 'linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)',
      },
    },
  },
  plugins: [],
}
