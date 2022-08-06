import type { NextPage } from "next";
import Head from "next/head";
import Catalog from "../app/features/Catalog";
import { Container } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>E Commerce Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Catalog />
        </Container>
      </main>
    </>
  );
};

export default Home;
