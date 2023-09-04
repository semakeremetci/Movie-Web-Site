/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#edf2f4",

          secondary: "#d90429",

          accent: "#ef233c",

          neutral: "#2b2d42",

          "base-100": "black",

          info: "#79aad2",

          success: "#1ac796",

          warning: "#f3d662",

          error: "#ef1f26",
        },
      },
    ],
  },
};
