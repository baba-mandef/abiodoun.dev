import { Box, Center, Text } from "@chakra-ui/react";

export default function HomeDesc() {
  return (
    <Center>
      <Box>
        <Text fontSize={{ base: '18px', md: '18px', lg: '18px', sm:'17px' }}  fontWeight={"bold"}>
          Imagination,{" "}
          <Box color="#ff7624" as="span">
            Beyond comprehension
          </Box>
        </Text>
      </Box>
    </Center>
  );
}
