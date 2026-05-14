"use client";

import { ChakraProvider, ColorModeScript, Box } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "@/components/Nav";
import theme from "@/themes";

export default function BlogLayout({ children, headData = {} }) {
  const {
    title = "Abiodoun Baba Mandef",
    description = "Je suis Abiodoun Paraïso. Passionné de programmation, je crée et donne vie à mon immagination en écrivant des lignes de codes.",
    image = "https://i.imgur.com/pDl0Tkb.png",
    url = "https://abiodoun.dev/"
  } = headData;

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Head>
          <title>{title}</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#ff7624" />
          <link rel="icon" type="image/x-icon" href="favicon.ico" />

          <meta name="description" content={description} />
          <meta name="title" content={title} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content={image} />
        </Head>
        <Box as="div" mb={"50px"}>
          {children}
        </Box>
        <Nav />
      </ChakraProvider>
    </>
  );
}