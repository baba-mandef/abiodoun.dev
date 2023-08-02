/* eslint-disable react/no-unescaped-entities */
import { Box, Center, Text } from "@chakra-ui/react";

export default function HomeBio() {
  return (
    <Center>
      <Box>
        <Text
          align="justify"
          fontSize="16"
          my="10"
          mb="5"
          p="2"
          color={"brandark.500"}
        >
          Hello ! Je suis{" "}
          <Box color="brand.500" as="span">
            Abiodoun Paraïso
          </Box>
          . Passionné de programmation et de technologie J'aime créer et donner
          vie à mon immagination en écrivant des lignes de codes. Je construit
          des sites web, des applications et d'autres solutions numériques pour
          relever les défis du quotidien.
          <br />
          <br />
          Habituellement, je porte le pseudo de Baba Mandef sur internet. Vous
          pouvez me retrouver fréquemment sur des sites tels que   <Box
              as="a"
              href="https://github.com/baba-mandef"
              target="_blank"
              color={"brand.500"}
              textDecoration={"underline"}
            >Github</Box>,{" "}

            <Box
              as="a"
              href="https://twitter.com/baba_mandef"
              target="_blank"
              color={"brand.500"}
              textDecoration={"underline"}
            >Twitter</Box> ou {" "}
             <Box
              as="a"
              href="https://t.me/baba_mandef"
              target="_blank"
              color={"brand.500"}
              textDecoration={"underline"}
            >Telegram</Box>
        </Text>
      </Box>
    </Center>
  );
}
