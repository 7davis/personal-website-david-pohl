/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'blue-zodiac': {
                    '50': '#ebf9ff',
                    '100': '#daf4ff',
                    '200': '#bde9ff',
                    '300': '#95d8ff',
                    '400': '#6bbbff',
                    '500': '#499dff',
                    '600': '#297bff',
                    '700': '#1d66e5',
                    '800': '#1b57b8',
                    '900': '#0a192f',
                },
                "darkest-blue": "hsl(218, 60%, 8%)",
                'dav-aquamarine': {
                    '50': '#eefffa',
                    '100': '#c5fff0',
                    '200': '#8bffe4',
                    '300': '#64ffda',
                    '400': '#14edc0',
                    '500': '#00d1a8',
                    '600': '#00a88b',
                    '700': '#008570',
                    '800': '#056a5b',
                    '900': '#0a574c',
                },
                "darkest-aquamarine": "hsla(171, 79%, 15%, 50%)",
                "dav-text": "#8892b0",
                "dav-link": "#64ffda",

            },
        },
    },
    plugins: [],
}