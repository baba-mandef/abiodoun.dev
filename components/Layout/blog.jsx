"use client";

import { ChakraProvider, ColorModeScript, Box } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "@/components/Nav";
import theme from "@/themes";

export default function BlogLayout({ children}) {


  return (
    <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <Box as="div" mb={"50px"}>
            {children}
          </Box>
          <Nav />
        </ChakraProvider>
    </>
  );
}
