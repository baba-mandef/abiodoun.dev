import { HStack, Box, Center, Image } from "@chakra-ui/react";

export default function Stack() {
  return (
    <>
      <Center>
      <HStack pt="10px">
        <Box mx="10px">
          <Center>
            <Image src="img/python.png" boxSize="50" alt="python"></Image>
          </Center>
        </Box>
        <Box mx="10px">
          <Center>
            <Image src="img/django.png" boxSize="50" alt="django"></Image>
          </Center>
        </Box>
        <Box mx="10px">
          <Center>
            <Image src="img/php.png" boxSize="50" alt="php"></Image>
          </Center>
        </Box>
        <Box mx="10px">
          <Center>
            <Image src="img/postgresql.png" boxSize="50" alt="postgresql"></Image>
          </Center>
        </Box>
        <Box mx="10px">
          <Center>
            <Image src="img/javascript.png" boxSize="50" alt="javascript"></Image>
          </Center>
        </Box>
        <Box mx="10px">
          <Center>
            <Image src="img/react.png" boxSize="50" alt="react"></Image>
          </Center>
        </Box>
        <Box mx="10px">
          <Center>
            <Image src="img/docker.png" boxSize="50" alt="docker"></Image>
          </Center>
        </Box>
       
      </HStack>
      </Center>
    </>
  );
}
