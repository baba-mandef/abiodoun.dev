import { Box, Center, Text } from "@chakra-ui/react";

export default function HomeDesc() {
  return (
    <Center>
      <Box>
        <Text fontSize={"18"} fontWeight={"bold"}>
          Imagination,{" "}
          <Box color="#ff7624" as="span">
            Beyond comprehension
          </Box>
        </Text>
      </Box>
    </Center>
  );
}
