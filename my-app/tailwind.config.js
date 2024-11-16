/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // keyframes 설정
      keyframes: {
        'show-up-l': {
          '0%': {
            transform: 'scale(0) translateX(-50%)',  // 초기 상태
          },
          '100%': {
            transform: 'scale(1) translateX(0)',  // 최종 상태
          },
        },

        'fadein': {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        'fadeout': {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },

      },
      // 애니메이션 설정
      animation: {
        'show-up-l': 'scale-up-hor-left 0.4s cubic-bezier(.39,.575,.565,1.000) both',

        'fadein' : 'fadein 1.3s',
        'fadeout' : 'fadeout 1.3s',
      },
    },
  },
  plugins: [],
}
