"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript, Box } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "@/components/Nav";
import theme from "@/themes";

export default function Layout({ children }) {
  return (
    <>
      <CacheProvider>
         <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <Head>
            <title>Baba Mandef</title>
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/icon.png"></link>
            <meta name="theme-color" content="#ff7624" />
            <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
            <meta
              name="description"
              content="Imagination, beyond comprehension"
            ></meta>

            {/*  Primary Meta Tags */}
            <title>Abiodoun Baba Mandef</title>
            <meta name="title" content="Abiodoun Baba Mandef" />
            <meta
              name="description"
              content="Je suis Abiodoun Paraïso. Passionné de programmation, je crée et donne vie à mon immagination en écrivant des lignes de codes. "
            />

            {/* -- Open Graph / Facebook  */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://abiodoun.dev/" />
            <meta property="og:title" content="Abiodoun Baba Mandef" />
            <meta
              property="og:description"
              content="Je suis Abiodoun Paraïso. Passionné de programmation, je crée et donne vie à mon immagination en écrivant des lignes de codes. "
            />
            <meta
              property="og:image"
              content="https://i.imgur.com/pDl0Tkb.png"
            />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://abiodoun.dev/" />
            <meta property="twitter:title" content="Abiodoun Baba Mandef" />
            <meta
              property="twitter:description"
              content="Je suis Abiodoun Paraïso. Passionné de programmation, je crée et donne vie à mon immagination en écrivant des lignes de codes. "
            />
            <meta
              property="twitter:image"
              content="https://i.imgur.com/pDl0Tkb.png"
            />
          </Head>
          <Box as="div" mb={"50px"}>
            {children}
          </Box>
          <Nav />
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
