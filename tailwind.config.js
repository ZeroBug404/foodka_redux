/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ce2829",
        
"secondary": "#ea6793",
        
"accent": "#59ffc2",
        
"neutral": "#2A2A3C",
        
"base-100": "#FCFCFD",
        
"info": "#42A2F0",
        
"success": "#1BDEB4",
        
"warning": "#fdcc1f",
        
"error": "#EC745F",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

