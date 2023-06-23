const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

const scheme_colors = {
  scheme1 : {
    25 : "#1664B8", //min // or hover text 
    50: "#fff", //color text bg // or bg hover 
    100:"#626E7D", // text nav
    200:"#E7F3F9", //color nav

    300:"#E0E0E0",//border aside
    400:"#CFD9E5" //text sub
  },
  scheme2 : {
    25 : "#255946", //min // or hover text 
    50: "#fff", //color text bg // or bg hover 
    100:"#FFFFFF", // text nav
    200:"#6FBFA2", //color nav

    300:"#E0E0E0", //border aside
    400:"#CFD9E5" // text sub
  },
  scheme3 : {
    25 : "#BF6B04", //min // or hover text 
    50: "#fff", //color text bg // or bg hover 
    100:"#FFFFFF", // text nav
    200:"#F2C094", //color nav

    300:"#E0E0E0", //border aside
    400:"#CFD9E5" // text sub
  },
  
  scheme4 : {
    25 : "#8C5230", //min // or hover text 
    50: "#fff", //color text bg // or bg hover 
    100:"#FFFFFF", // text nav
    200:"#D9B1A3", //color nav

    300:"#E0E0E0", //border aside
    400:"#CFD9E5" // text sub
  }
} 


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-banner":
          "linear-gradient(180deg, #004268 4.77%, rgba(0, 66, 104, 0.580799) 44.68%,rgba(0,66,104,0) 85.13%)",
      },
      container: {
        center: true,
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
        },
      },
      colors: {
        ib: {
          25: "#D0DFE5",
          50: "#A1B1C0",
          100: "#7289A0",
          200: "#145E7F",
          300: "#2C4F71",
          400: "#163D61",
          500: "#163D61",
          600: "#17355A",
          700: "#0C2945",
          800: "#0A1C37",
        },
        s: {
          error: "#F24B4B",
          success: "#5BC69A",
          alert: "#F5B51F",
          info: "#006EAD",
        },
      },
      dropShadow: {
        high: "0 0 30px 0 #EEF2F3",
        medium: "1 0 15px 0 #EEF2F3",
        low: "0 0 10px 0 rgba(238, 242, 243, 0.7)",
      },
      boxShadow: {
        high: "0 0 30px 0 #EEF2F3",
        medium: "0 0 15px 0 #EEF2F3",
        low: "0 0 10px 0 rgba(238, 242, 243, 0.7)",
        input: "0px 7px 10px rgba(41, 38, 50, 0.03)",

        popup: "0px 7px 42px 4px rgba(8, 71, 87, 0.1)",
        form: "0px 7px 42px 4px rgba(8, 71, 87, 0.1);",
      },
      borderRadius: {
        none: "0",
        4: "0.25rem",
        8: "0.5rem",
        12: "0.75rem",
        16: "1rem",
        20: "1.25rem",
        24: "1.5rem",
      },
      fontSize: {
        "ar-D1": [
          "2.875rem",
          {
            fontWeight: "700",
            lineHeight: "5.375rem",
          },
        ],
        "ar-H1": [
          "2.375rem",
          {
            fontWeight: "700",
            lineHeight: "3.5rem",
          },
        ],
        "ar-H2": [
          "2rem",
          {
            fontWeight: "700",
            lineHeight: "3rem",
          },
        ],
        "ar-H3": [
          "1.25rem",
          {
            fontWeight: "700",
            lineHeight: "2rem",
          },
        ],
        "ar-H4": [
          "1.125rem",
          {
            fontWeight: "700",
            lineHeight: "1.75rem",
          },
        ],
        "ar-H5": [
          "0.875rem",
          {
            fontWeight: "700",
            lineHeight: "1.25rem",
          },
        ],
        "ar-L1-bold": [
          "1rem",
          {
            fontWeight: "700",
            lineHeight: "1.5rem",
          },
        ],
        "ar-L1-text": [
          "1rem",
          {
            fontWeight: "500",
            lineHeight: "1.5rem",
          },
        ],
        "ar-L2-bold": [
          "0.875rem",
          {
            fontWeight: "700",
            lineHeight: "1.25rem",
          },
        ],
        "ar-L2-regular": [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "1.25rem",
          },
        ],
        "ar-L3": [
          "0.75rem",
          {
            fontWeight: "700",
            lineHeight: "1.25rem",
          },
        ],
        "ar-P1": [
          "1.5rem",
          {
            fontWeight: "700",
            lineHeight: "2.25rem",
          },
        ],
        "ar-P2": [
          "1.125rem",
          {
            fontWeight: "400",
            lineHeight: "2.25rem",
          },
        ],
        "ar-P3": [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "1.5rem",
          },
        ],

        // English Typography

        "en-H1-bold": [
          "1.5rem",
          {
            fontWeight: "700",
            lineHeight: "2rem",
          },
        ],
        "en-H1-regular": [
          "1.5rem",
          {
            fontWeight: "400",
            lineHeight: "2rem",
          },
        ],
        "en-H1-light": [
          "1.5rem",
          {
            fontWeight: "300",
            lineHeight: "2rem",
          },
        ],
        "en-H2-bold": [
          "1.25rem",
          {
            fontWeight: "700",
            lineHeight: "1.5rem",
          },
        ],
        "en-H2-regular": [
          "1.25rem",
          {
            fontWeight: "400",
            lineHeight: "1.5rem",
          },
        ],
        "en-H2-light": [
          "1.25rem",
          {
            fontWeight: "300",
            lineHeight: "1.5rem",
          },
        ],
        "en-H3-bold": [
          "1rem",
          {
            fontWeight: "700",
            lineHeight: "1.25rem",
          },
        ],
        "en-H3-regular": [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "1.25rem",
          },
        ],
        "en-H3-light": [
          "1rem",
          {
            fontWeight: "300",
            lineHeight: "1.25rem",
          },
        ],
        "en-H4-bold": [
          "0.875rem",
          {
            fontWeight: "700",
            lineHeight: "1.25rem",
          },
        ],
        "en-H4-regular": [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "1.25rem",
          },
        ],
        "en-H4-light": [
          "0.875rem",
          {
            fontWeight: "300",
            lineHeight: "1.25rem",
          },
        ],
        "en-body": [
          "0875rem",
          {
            fontWeight: "400",
            lineHeight: "1.5rem",
          },
        ],
        "en-L1": [
          "1rem",
          {
            fontWeight: "700",
            lineHeight: "1.25rem",
          },
        ],
        "en-L2": [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "1.25rem",
          },
        ],
        "en-L3-bold": [
          "0.75rem",
          {
            fontWeight: "700",
            lineHeight: "1rem",
          },
        ],
        "en-L3-regular": [
          "0.75rem",
          {
            fontWeight: "400",
            lineHeight: "1rem",
          },
        ],
        "en-caption": [
          "0.75rem",
          {
            fontWeight: "400",
            lineHeight: "1rem",
          },
        ],
      },
      fontFamily: {
        en: "Inter",
        ghalam: "Ghalam2",
        satisfy: "satisfy",
        ar: ["var(--font-brando)"],
      },
    },
    plugins: [
      plugin(function ({ addUtilities }) {
        addUtilities({
          ".rad-4": {
            "border-radius": "0.25rem 0.25rem 0.25rem 0",
          },
          ".rad-8": {
            "border-radius": "0.75rem 0.75rem 0.75rem 0",
          },
          ".rad-16": {
            "border-radius": "1rem 1rem 1rem 0",
          },
          ".rad-20": {
            "border-radius": "1.25rem 1.25rem 1.25rem 0",
          },
          ".rad-24": {
            "border-radius": "1.5rem 1.5rem 1.5rem 0",
          },
        });
      }),
    ],
  },
};
