/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            roboto: ["Roboto", "sans-serif"]
        },
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
                "dav-blue": {
                    "50" : "#ebf1fa",
                    "100": "#a1bee8",
                    "200": "#588cd5",
                    "300": "#2a5ea7",
                    "400": "#17355e"
                },
                "dav-blue": "#4831d4",
                "dav-darkblue": "#281b76",
                "dav-primary": "hsl(248, 65%, 51%)",
                "dav-secondary": "hsl(200, 100%, 90%)",
                "dav-tertiary": "hsl(248, 60%, 95%)",
                "dav-darkestpurple": "hsl(267, 52%, 40%)",
                "dav-purple": "hsl(267, 52%, 50%)",
                "dav-midpurple": "hsl(267, 52%, 55%)",
                "dav-lightpurple": "hsl(267, 52%, 70%)",
                "dav-whitepurple": "hsl(267, 52%, 96%)",
                "dav-mint": "#5be9b9",
                "dav-orange": "hsl(33, 95%, 48%)",
            },
        },
    },
    plugins: [],
}