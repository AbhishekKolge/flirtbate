import CssBaseline from '@mui/material/CssBaseline';
import type { ReactNode } from 'react';
import { Cache } from './cache';
import { Theme } from './theme';

interface ProvidersProps {
  readonly children: ReactNode;
}

export function Providers(props: ProvidersProps) {
  const { children } = props;
  return (
    <Cache>
      <Theme>
        <CssBaseline />
        {children}
      </Theme>
    </Cache>
  );
}
