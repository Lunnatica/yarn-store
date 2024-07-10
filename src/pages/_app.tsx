import '../theme/fonts/import.css';

import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from '../theme';

interface AppProps {
  Component: React.FC;
  pageProps: Record<string, unknown>;
}

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Yarn store | Order our unique Yarn products.</title>
          <meta
            name="description"
            content="Yarn store, order your favourite products made using our unique yarn colors that everyone loves!"
          />
          <meta name="keywords" content="yarn, store, products, unique, colors, order" />
          <meta property="og:title" content="Yarn store | Order our unique Yarn products." />
          <meta
            property="og:description"
            content="Yarn store, order your favourite products made using our unique yarn colors that everyone loves!"
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content="Yarn store | Order our unique Yarn products." />
          <meta
            name="twitter:description"
            content="Yarn store, order your favourite products made using our unique yarn colors that everyone loves!"
          />
          <meta name="twitter:card" content="summary" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
