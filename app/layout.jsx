"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme, Grid, GridItem } from "@chakra-ui/react";
import Nav from "./components/partials/Nav";
import theme from "./themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Baba Mandef</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
        <meta
          name="description"
          content="Imagination, beyond comprehension"
        ></meta>
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            {children}
            <Nav />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
