import { Box, Center, Text } from "@chakra-ui/react";

export default function ProjectDesc() {
  return (
    <Center>
      <Box>
        <Text fontSize={{base:"sm", md: "md", lg:"md"}} fontWeight={"bold"} color={"text"} >
         
          <Box color="brand.500" as="span">
            - Mes Projets 🛠️ -
          </Box>
          
        </Text>
      </Box>
    </Center>
  );
}
