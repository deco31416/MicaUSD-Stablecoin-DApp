// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Definimos las rutas para los archivos que utilizarán TailwindCSS
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extendemos el tema con la fuente Poppins
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Añadimos Poppins como la fuente principal
      },
      colors: {
        primary: {
          "50": "rgba(255, 168, 15, 0.05)",
          "100": "rgba(255, 168, 15, 0.1)",
          "200": "rgba(255, 168, 15, 0.2)",
          "300": "rgba(255, 168, 15, 0.3)",
          "400": "rgba(255, 168, 15, 0.4)",
          "500": "rgba(255, 168, 15, 0.5)",
          "600": "rgba(255, 168, 15, 0.6)",
          "700": "rgba(255, 168, 15, 0.7)",
          "800": "rgba(255, 168, 15, 0.8)",
          "900": "rgba(255, 168, 15, 0.9)",
          DEFAULT: "rgba(255, 168, 15, 0.98)",
          foreground: "#fff",
        },
      },
    },
  },
  darkMode: "class", // Habilitamos el modo oscuro basado en clases
  plugins: [
    nextui({
      themes: {
        dark: {
          layout: {}, // Aquí puedes ajustar el layout del tema oscuro si lo deseas
          colors: {
            primary: {
              "50": "rgba(255, 168, 15, 0.05)",
              "100": "rgba(255, 168, 15, 0.1)",
              "200": "rgba(255, 168, 15, 0.2)",
              "300": "rgba(255, 168, 15, 0.3)",
              "400": "rgba(255, 168, 15, 0.4)",
              "500": "rgba(255, 168, 15, 0.5)",
              "600": "rgba(255, 168, 15, 0.6)",
              "700": "rgba(255, 168, 15, 0.7)",
              "800": "rgba(255, 168, 15, 0.8)",
              "900": "rgba(255, 168, 15, 0.9)",
              DEFAULT: "rgba(255, 168, 15, 0.98)",
              foreground: "#fff",
            },
          },
        },
      },
    }),
  ],
};
