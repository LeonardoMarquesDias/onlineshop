/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'i12pro': '390px',
        
        'i14promax': '430px',
    
        'ipadmini': '768px',

        'ipadair': '820px',
  
        'laptop': '1024px',
  
        'desktop': '1440px',

        'desktop1': '1680px',

        'desktop2': '1920px',

        'desktop2': '2560px',
      },
    },
  },
  plugins: [],
};
