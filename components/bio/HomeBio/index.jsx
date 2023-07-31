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
        </Text>
      </Box>
    </Center>
  );
}
