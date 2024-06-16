import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        '20': '20px',
      },
      boxShadow: {
        't-container': '0px 0px 1px 0px #80808033, 0px 2px 30px 0px #80808014, 0px 0px 15px 0px #80808008',
      },
      colors: {
        't-surface-black': '#101010',
      },
    },
  },
  plugins: [],
};
export default config;
