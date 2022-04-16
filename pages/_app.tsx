import React from 'react';
import type { AppProps } from 'next/app';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';

import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme: colorScheme }}>
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
