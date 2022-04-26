

import React from "react";
import Head from "next/head";
import Header from "./Header";
import { Container } from "semantic-ui-react";

export default function Layout({ children }) {
  return (
    <Container>
      <Head>
        <title>Resume Builder</title>
        <meta name="description" content="Html/Pdf Resume Builder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container style={{ padding: "0 5rem", height: "100vh" }}>
        {children}
      </Container>
    </Container>
  );
}
