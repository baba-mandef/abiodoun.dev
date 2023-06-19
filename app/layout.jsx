"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import  Nav  from './components/partials/Nav'
import theme from "./themes";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Baba Mandef
        </title>
        <meta name="description" content="Imagination, beyond comprehension"></meta>
        
      </head>
      <body >
        <CacheProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
          
          <Nav></Nav>
        </CacheProvider>
      </body>
    </html>
  );
}
