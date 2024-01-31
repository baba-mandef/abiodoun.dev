import { Box, Center, Text } from "@chakra-ui/react";

export default function AboutDesc() {
  return (
    <Center>
      <Box>
        <Text fontSize={{base:"sm", md: "md", lg:"md"}} fontWeight={"bold"} color={"brandark.500"} >
          Technologies 🛠️{" "}
          <Box color="brand.500" as="span">
            - Afrique ☥  -
          </Box>
          {" "}Innovation 🚀
        </Text>
      </Box>
    </Center>
  );
}
