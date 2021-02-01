import '../styles/globals.css';
import '@fontsource/syne';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Syne', sans-serif;
    font-size: 16px;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
