import { extendTheme } from "@chakra-ui/react";
import { Quicksand } from "next/font/google";

const quick = Quicksand({ weight: ['500'], subsets: ["latin"] });

const theme =  extendTheme({
  colors:{
    brand : {
      300 : "#ff7624"
    }
  },
    fonts: {
    heading: quick.style.fontFamily,
    body: quick.style.fontFamily,
  }, 
  shadows: {
  
    barShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
  }
})

export default theme