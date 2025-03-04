import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { ReactNode } from 'react';

interface CacheProps {
  readonly children: ReactNode;
}

export function Cache(props: CacheProps) {
  const { children } = props;
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>{children}</AppRouterCacheProvider>
  );
}
