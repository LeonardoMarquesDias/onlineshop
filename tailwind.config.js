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
        'iPhone11Pro': '375px',
        'iPhone12ProMax': '379px',
        'iPhone13mini': '340px',
        'iPhone13Pro': '428px',
        'iPhone15Pro': '393px',
        'iPhone15ProMax': '430px',
        'iPadmini': '608px',
        'iPad': '575px',
        'iPadPro11': '581px',
        'iPadAir5': '820x',
        'MacbookAirM2': '1280px',
        'MacbookPro16': '1728px',
        'iMac24': '1120px',
        'MacbookAir': '1559px',
        'Laptop': '1440px',
        'Desktop1': '1680px',
        'Desktop2': '1920px',
        'desktop3': '2560px',
      },
    },
  },
  plugins: [],
};
