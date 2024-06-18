import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      /*
      // To calculate clamp, set Viewport Min 240px and Max 448px
      // Min Size is 60% of the desired size which is set as Max Size
      */
      '12': 'clamp(0.45rem, 0.104rem + 2.308vw, 0.75rem)',
      '14': 'clamp(0.525rem, 0.121rem + 2.692vw, 0.875rem)',
      '16': 'clamp(0.6rem, 0.138rem + 3.077vw, 1rem)',
      '22': 'clamp(0.825rem, 0.19rem + 4.231vw, 1.375rem)',
      button: 'clamp(0.313rem, -0.481rem + 5.288vw, 1rem)',
    },
    screens: {
      xxs: '320px',
      // => @media (min-width: 370px) { ... }
      xs: '440px',
      // => @media (min-width: 440px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        'shine-45': 'shine-45 3800ms infinite ease-out',
      },
      backgroundImage: {
        't-black-gradient': 'linear-gradient(0deg, #101010 7.05%, rgba(16, 16, 16, 0) 44.44%)',
        't-purple-gradient': 'linear-gradient(111.34deg, #9F8BFF 0%, #7053FF 100%)',
        't-half-purple-border-gradient':
          'linear-gradient(168.47deg, rgba(54, 54, 54, 0.6) 47.33%, rgba(127, 67, 255, 0.6) 91.53%)',
        't-half-red-border-gradient':
          'linear-gradient(168.47deg, rgba(54, 54, 54, 0.6) 47.33%, rgba(218, 67, 67, 0.6) 91.53%)',
      },
      borderRadius: {
        '20': '20px',
      },
      boxShadow: {
        't-container': '0px 0px 1px 0px #80808033, 0px 2px 30px 0px #80808014, 0px 0px 15px 0px #80808008',
        't-wallet-icon': '0px 3.89px 3.89px 0px #1010100D, 0px 0px 3.89px 0px #1010101A',
        't-button-glow': '0px 0px 14px 0px #FFFFFF40 inset',
      },
      colors: {
        't-black': '#101010',
        't-dark': '#1A1A1A',
        't-purple': '#7F43FF',
        't-purple-border': '#9F8BFF',
        't-red': '#DA4343',
        't-gray': '#808080',
        't-light': '#FAFAFA',
        't-light-70': '#FAFAFAB2' /* 70% */,
        't-light-30': '#FAFAFA4D' /* 30% */,
        't-light-16': '#FAFAFA29' /* 16% */,
        't-light-8': '#FAFAFA14' /* 8% */,
        't-light-4': '#FAFAFA0A' /* 4% */,
        't-white-80': '#FFFFFFCC' /* 80% */,
        't-white-50': '#FFFFFF80' /* 50% */,
        't-white-10': '#FFFFFF1A' /* 10% */,
        't-shine-10': '#D9D9D91A' /* 10% */,
      },
      keyframes: {
        'shine-45': {
          '0%': { transform: 'translate(0%, 0%)' },
          '50%': { transform: 'translate(150%, 50%)' },
          '100%': { transform: 'translate(300%, 100%)' },
        },
      },
      scale: {
        99: '.99',
      },
      spacing: {
        '30': '7.5rem' /* 120px */,
        '65': '16.25rem' /* 260px */,
        '112': '28rem' /* 448px */,
        '210': '52.5rem' /* 840px */,
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionProperty: {
        'without-border': 'background-color, color, opacity, box-shadow, transform',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
