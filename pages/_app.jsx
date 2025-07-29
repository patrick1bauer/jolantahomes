import "@/styles/globals.css";
import React from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="Jolanta Homes"/>
      <title>Jolanta Homes</title>
      <link rel="icon" type="image/ico" href="/pictures/favicon.ico"></link>
    </Head>
    <div className="App">
      <Component {...pageProps} />
    </div>
    </>
  );
}
