import { Box, Center, Heading } from "@chakra-ui/react";

export default function Name() {
  return (
    <Center>
      <Box mt="10">
        <Heading as="h3" fontSize="2xl" color={"text"}>
          <Box as="span" color="brand.500">
            ABIODOUN
          </Box>{" "}
          BABA MANDEF
        </Heading>
      </Box>
    </Center>
  );
}
