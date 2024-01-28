/* eslint-disable react/no-unescaped-entities */
import { Box, Center, Heading } from "@chakra-ui/react";

export default function HomeDesc() {
  return (
    <Center>
      <Box>
        <Heading
          as={"h6"}
          size={{ base: "sm", md: "md", lg: "md" }}
          color={"brandark.500"}
          fontWeight={"bold"}
        >
          Innover pour servir{" "}
          <Box color="brand.500" as="span">
            l'Humanité
          </Box>
        </Heading>
      </Box>
    </Center>
  );
}
