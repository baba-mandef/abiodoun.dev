/* eslint-disable react/no-unescaped-entities */
import { Box, Center, Text } from "@chakra-ui/react";

export default function HomeBio() {
  return (
    <Center>
      <Box>
        <Text align="justify" fontSize="18" my="10" mb="5" p="2">
          Hello! I'm{" "}
          <Box color="#ff7624" as="span">
            Abiodoun Paraïso
          </Box>
          , an African full-stack engineer enjoying building apps with python
          and javascript to tackle everyday challenges. Let's connect and dive
          into the exciting world of technology and beyond !
        </Text>
      </Box>
    </Center>
  );
}
