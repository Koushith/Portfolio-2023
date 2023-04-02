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
          content="I'm a Designer turned into Developer, skilled in React, React Native, Swift UI, and Java. Check out my portfolio and get in touch!"
        />
        <meta
          name="keywords"
          content="designer turned into developer, react, react native, swiftui, java"
        />
        <meta name="author" content="Koushith" />
      </Head>
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Koushith",
          jobTitle: "Designer Turned into Developer",
          description:
            "I'm a designer turned into developer with experience in React, React Native, Swift UI, and Java.",
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
