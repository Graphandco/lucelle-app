/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            spacing: {
                "gap-0.5": "0.175rem",
            },
            colors: {
                gris: "#222F3E",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                title: ['"Open Sans"', "sans-serif"],
            },
            fontSize: {
                "2xs": "0.6rem",
                bigtext: "clamp(22px, calc(7px + 3vw), 2.5rem)",
                movietitletext: "clamp(12px, calc(4px + 2vw), 1.25rem)",
                // sm: '0.8rem',
                // base: '1rem',
                // xl: '1.25rem',
                // '2xl': '1.563rem',
                // '3xl': '1.953rem',
                // '4xl': '2.441rem',
                // '5xl': '3.052rem',
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        themes: [
            "night",
            {
                night: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=night]"
                    ],
                    error: "red",
                    // primary: "#03ccf8",
                    // "primary-focus": "#232934",
                    // primary: "#60a5fa",
                    // "primary-focus": "#232934",
                },
            },
        ],
    },
};
