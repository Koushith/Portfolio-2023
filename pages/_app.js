import Head from "next/head";
import { Footer, NavBar } from "../components";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Koushith Portfolio</title>
    </Head>
    {/* <NavBar /> */}
    <Component {...pageProps} />
    {/* <Footer /> */}
  </>
);

export default MyApp;
