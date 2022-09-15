import "../styles/entry.css";
import type { AppProps } from "next/app";
import "../dist/output.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
