import { extendTheme } from "@chakra-ui/react";
import { Poppins, Quicksand } from "next/font/google";

const pop = Poppins({ weight: ['700'], subsets: ["latin"],preload: true, });
const pop_s = Quicksand({ weight: ['600'], subsets: ["latin"],preload: true, });
const theme =  extendTheme({
  colors:{
    brand : {
      500 : "#ff7624",

      100 :'#ffab7b',
    },
    orange : {
      500 : "#ff7624"
    },
    brandark:{
      500 : "#000a40"
    }
  },
    fonts: {
    heading: pop.style.fontFamily,
    body: pop_s.style.fontFamily,
  
  },
/*   breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '1023px',
    xl: '1215px',
   
  }, */
  shadows: {
  
    barShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
  }
})

export default theme