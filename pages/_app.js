import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Main from "../layout/main";

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
