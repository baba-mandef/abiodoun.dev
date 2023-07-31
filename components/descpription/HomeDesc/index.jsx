import { Box, Center, Heading } from "@chakra-ui/react";

export default function HomeDesc() {
  return (
    <Center>
      <Box>
        <Heading as={"h6"} size={{base:"sm", md:"md", lg:"md" }} color={"brandark.500"} fontWeight={"bold"}>
          Imagination,{" "}
          <Box color="brand.500" as="span">
            Beyond comprehension
          </Box>
        </Heading>
      </Box>
    </Center>
  );
}
