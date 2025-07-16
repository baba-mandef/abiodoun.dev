import { extendTheme } from "@chakra-ui/react";
import { Poppins, Quicksand } from "next/font/google";

const pop = Poppins({ weight: ['700'], subsets: ["latin"], preload: true });
const pop_s = Quicksand({ weight: ['700'], subsets: ["latin"], preload: true });

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      500: "#ff7624",
      100: '#ffab7b',
    },
    brand_second: {
      500: "#000a40"
    },
  },
  semanticTokens: {
    colors: {
      // Couleurs qui s'adaptent au mode dark/light
      text: {
        default: '#000a40', // light mode
        _dark: '#f0f0f0'    // dark mode
      },
      bg: {
        default: '#ffffff', // light mode
        _dark: 'rgb(0, 10, 64)' // dark mode
      },
      // Vous pouvez ajouter d'autres couleurs sémantiques ici
    }
  },
  fonts: {
    heading: pop.style.fontFamily,
    body: pop_s.style.fontFamily,
  },
  styles: {
    global: (props) => ({
      body: {
        color: props.colorMode === 'dark' ? 'text' : 'text',
        bg: props.colorMode === 'dark' ? 'bg' : 'bg',
      },
    }),
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '1023px',
    xl: '1215px',
  },
  shadows: {
    barShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
  }
});

export default theme;