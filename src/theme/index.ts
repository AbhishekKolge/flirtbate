'use client';
import { createTheme } from '@mui/material/styles';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  variable: '--font-manrope-sans',
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
});

export const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: manrope.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    background: {
      paper: 'hsl(324.55deg 57.89% 7.45%)',
    },
  },
});
