import { Box, Center, Text } from "@chakra-ui/react";

export default function AboutDesc() {
  return (
    <Center>
      <Box>
        <Text fontSize={{base:"xs", md: "md", lg:"md"}} fontWeight={"extrabold"} color={"brandark.500"} >
          Tech enthusiast{" "}
          <Box color="brand.500" as="span">
            - Software engineer -
          </Box>
          {" "}Nature Lover
        </Text>
      </Box>
    </Center>
  );
}
