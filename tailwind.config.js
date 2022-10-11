/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:{
    //enabled:true,
  content:["/index.html","/src/**/*.jsx"],
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  options:{
    //pass options directly to purgeCss
  }
},
  variant:{
    extend:{
      backgroundColor:["active"]
    }
  },
  theme: {

    extend: {
      colors:{
        brand:{
          DEFAULT:"0fa9e6",
          light:"3fbaeb",
          dark:"0c87b8"
        }
      },
      fontFamily:{
        headline:"Helvetica Neue"

      }
      
      
    },
  },
  plugins: [],
}
