import Layout from "../components/layout";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../utils/themes";
import { GlobalStyles } from "../components/GlobalStyles";
import ThemeToggler from "../components/ThemeToggler";
import useDarkTheme from "../hooks/useDarkTheme";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  const [theme, themeToggler] = useDarkTheme();
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <GlobalStyles />
        <Layout>
          <ThemeToggler themeToggler={themeToggler}/>
          <Component {...pageProps} />
        </Layout>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
