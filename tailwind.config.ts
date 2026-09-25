import type {Config} from "tailwindcss";
const config:Config={
    content:[
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme:{
        extend:{
            fontFamily:{
                serif:["var(--font-cinzel)","serif"],
                sans:["var(--font-inter)","sans-serif"],
            },
            color:{
                nautical:{
                    950:"#040d1a",
                    900:"#071018",
                    800:"#0f1f2e",
                    700:"#1a334a",
                },
                parchment:"#f1e6d0",
                gold:{
                    300:"#fef08a",
                    400:"#facc15",
                    500:"#d4af37",
                    600:"#ca8a04",
                },
            },
            keyframes:{
                shake:{
                    "0%,100%":{transform:"translateX(0)"},
                    "20%,60%":{transform:"translateX(-6px)"},
                    "40%,80%":{transform:"tramslateX(6px)"},
                },
                pulseGlow:{
                    "0%,100%":{opacity:"0.4", filter:"drop-shadow(0 0 5px rgba(212,175,55,9,4))"},
                    "50%":{opacity:"0.9",filter:"drop-shadow(0 0 15px rgba(212,175,55,0,0.8))"},
                },
            },
            animation:{
                shake:"shake 0.4s ease-in-out",
                "pulse-glow":"pulseGlow 3s infinite ease-in-out",
            },
        },
    },
    plugins:[],
};
export default config;