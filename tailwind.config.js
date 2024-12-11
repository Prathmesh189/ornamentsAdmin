
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#031926', // Define the custom shade
      },
     
      fontFamily: {
        text: ['Anton', 'sans-serif'], // Set the font to Anton
      },
    },
  },
  plugins: [],
}
