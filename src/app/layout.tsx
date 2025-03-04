import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Providers } from '@/providers';

export const metadata: Metadata = {
  title: 'Flirtbate: #1 Adult Video Call Platform',
  description:
    'Join Flirtbate, the #1 adult video chat platform for live private video call experience. Connect with sexy models, enjoy real-time interactions, and explore private shows anytime!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
