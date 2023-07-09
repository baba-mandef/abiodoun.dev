import { Box, Center, Text } from "@chakra-ui/react";

export default function AboutDesc() {
  return (
    <Center>
      <Box>
        <Text fontSize={{ base: '18px', md: '18px', lg: '18px', sm:'13px' }} fontWeight={"bold"}>
          Tech enthusiast{" "}
          <Box color="#ff7624" as="span">
            - Software engineer -
          </Box>
          {" "}Nature Lover
        </Text>
      </Box>
    </Center>
  );
}
