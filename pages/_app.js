import Head from "next/head";
import { JsonLd } from "react-schemaorg";

import { Footer, NavBar } from "../components";

import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const skills = [
  {
    "@type": "DefinedTerm",
    name: "React",
  },
  {
    "@type": "DefinedTerm",
    name: "React Native",
  },
  {
    "@type": "DefinedTerm",
    name: "SwiftUI",
  },
  {
    "@type": "DefinedTerm",
    name: "Java",
  },
];

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Koushith's Portfolio</title>
        <meta
          name="description"
          content="skilled in React, React Native, Swift UI, and Java."
        />
        <meta name="author" content="Koushith" />
      </Head>
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Koushith",
          jobTitle: "Lead Engineer @ReclaimProtocol",
          skills: skills,
        }}
      />
      <NextNProgress color="#2dd4bf" />
      <NavBar />

      <Component {...pageProps} />

      <Analytics />
      <Footer />
    </>
  );
};

export default MyApp;
