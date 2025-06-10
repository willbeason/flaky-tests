import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import HeaderMenu from '@/components/HeaderMenu/HeaderMenu';
import { theme } from '@/theme';

export const metadata = {
  title: 'FlakyTests',
  description: 'A competitive logic puzzle game',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderMenu />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
