import Head from "next/head";
import { JsonLd } from "react-schemaorg";

import { Footer, NavBar } from "../components";
import { PostContextProvider } from "../context/post.context";

import "../styles/globals.css";

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

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Koushith's Portfolio</title>
      <meta
        name="description"
        content="I'm a designer turned into developer skilled in React, React Native, Swift UI, and Java. Check out my portfolio and get in touch!"
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
    <NavBar />
    <PostContextProvider>
      <Component {...pageProps} />
    </PostContextProvider>
    <Footer />
  </>
);

export default MyApp;
