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
      // Min Size is 75% of the desired size which is set as Max Size
      */
      '12': 'clamp(0.563rem, 0.346rem + 1.442vw, 0.75rem)',
      '14': 'clamp(0.656rem, 0.404rem + 1.683vw, 0.875rem)',
      '16': 'clamp(0.75rem, 0.462rem + 1.923vw, 1rem)',
      '22': 'clamp(1.031rem, 0.635rem + 2.644vw, 1.375rem)',
    },
    extend: {
      backgroundImage: {
        't-black-gradient': 'linear-gradient(0deg, #101010 7.05%, rgba(16, 16, 16, 0) 44.44%)',
        't-purple-gradient': 'linear-gradient(111.34deg, #9F8BFF 0%, #7053FF 100%)',
      },
      borderRadius: {
        '20': '20px',
      },
      boxShadow: {
        't-container': '0px 0px 1px 0px #80808033, 0px 2px 30px 0px #80808014, 0px 0px 15px 0px #80808008',
        't-wallet-icon': '0px 3.89px 3.89px 0px #1010100D, 0px 0px 3.89px 0px #1010101A',
      },
      colors: {
        't-black': '#101010',
        't-purple': '#7F43FF',
        't-red': '#DA4343',
        't-gray': '#808080',
        't-light': '#FAFAFA',
        't-light-70': '#FAFAFAB2' /* 70% */,
        't-light-30': '#FAFAFA4D' /* 30% */,
        't-light-16': '#FAFAFA29' /* 16% */,
        't-light-8': '#FAFAFA14' /* 8% */,
        't-light-4': '#FAFAFA0A' /* 4% */,
        't-white-80': '#FFFFFFCC' /* 80% */,
        't-white-10': '#FFFFFF1A' /* 10% */,
      },
      spacing: {
        '112': '28rem' /* 448px */,
        '210': '52.5rem' /* 840px */,
      },
    },
  },
  plugins: [],
};
export default config;
