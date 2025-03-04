import { ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { theme } from '@/theme';

interface ThemeProps {
  readonly children: ReactNode;
}

export function Theme(props: ThemeProps) {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
