/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx}"], // adjust if needed
    theme: {
        extend: {
        colors: {
            navy: "rgb(26,46,86)",      // navy color
            orange: "rgb(251,133,0)",   // orange color
            tealCustom: "rgb(33,158,188)", // teal color
            yellow: "rgb(255,199,39)", // yellow color
        },
        },
    },
    plugins: [],
}
