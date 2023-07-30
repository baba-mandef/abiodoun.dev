import { Box, Center, Heading } from "@chakra-ui/react";

export default function AboutDesc() {
  return (
    <Center>
      <Box>
        <Heading as={"h6"} size={"xs"} color={"brandark.500"} fontWeight={"bold"}>
          Tech enthusiast{" "}
          <Box color="brand.500" as="span">
            - Software engineer -
          </Box>
          {" "}Nature Lover
        </Heading>
      </Box>
    </Center>
  );
}
