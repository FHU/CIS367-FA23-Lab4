/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
  ],
  theme: {
    extend: {
      
      fontFamily: {
       
        custom: ['CustomFont', 'arial'],
      },
      colors: {
        
        primary: '#3498db',
        secondary: '#f39c12',
      },
      
    },
  },
  plugins: [
    
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography'), 
  
  ],
}