import {
  Box,
  SimpleGrid,
  Center,
  Image,
  Heading,
  AbsoluteCenter,
} from "@chakra-ui/react";

export default function ProjectList() {
  const styles = {
    backgroundImage: 'url("img/folder.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <Center>
        <SimpleGrid
          columns={{ base: "4", sm: "3", md: "4", lg: "4" }}
          spacing={{ base: "5", sm: "2", md: "5", lg: "10" }}
        >
          <Box>
            <Box boxSize={"120px"} style={styles}>
              <Center>
                <Image
                  mt="40px"
                  boxSize="50px"
                  src="img/python.png"
                  alt="python"
                ></Image>
              </Center>
            </Box>
            <Center>
              <Box maxW="120px">
                <Heading as="h6" size="x6">
                  Investing bot{" "}
                </Heading>
              </Box>
            </Center>
          </Box>

          <Box>
            <Box boxSize={"120px"} style={styles}>
              <Center>
                <Image
                  mt="40px"
                  boxSize="50px"
                  src="img/python.png"
                  alt="python"
                ></Image>
              </Center>
            </Box>
            <Center>
              <Box maxW="120px">
                <Heading as="h6" size="x6">
                  Investing bot{" "}
                </Heading>
              </Box>
            </Center>
          </Box>

          <Box>
            <Box boxSize={"120px"} style={styles}>
              <Center>
                <Image
                  mt="40px"
                  boxSize="50px"
                  src="img/python.png"
                  alt="python"
                ></Image>
              </Center>
            </Box>
            <Center>
              <Box maxW="120px">
                <Heading as="h6" size="x6">
                  Investing bot{" "}
                </Heading>
              </Box>
            </Center>
          </Box>
          <Box>
            <Box boxSize={"120px"} style={styles}>
              <Center>
                <Image
                  mt="40px"
                  boxSize="50px"
                  src="img/python.png"
                  alt="python"
                ></Image>
              </Center>
            </Box>
            <Center>
              <Box maxW="120px">
                <Heading as="h6" size="x6">
                  Investing bot{" "}
                </Heading>
              </Box>
            </Center>
          </Box>
          <Box>
            <Box boxSize={"120px"} style={styles}>
              <Center>
                <Image
                  mt="40px"
                  boxSize="50px"
                  src="img/python.png"
                  alt="python"
                ></Image>
              </Center>
            </Box>
            <Center>
              <Box maxW="120px">
                <Heading as="h6" size="x6">
                  Investing bot{" "}
                </Heading>
              </Box>
            </Center>
          </Box>
          <Box>
            <Box boxSize={"120px"} style={styles}>
              <Center>
                <Image
                  mt="40px"
                  boxSize="50px"
                  src="img/python.png"
                  alt="python"
                ></Image>
              </Center>
            </Box>
            <Center>
              <Box maxW="120px">
                <Heading as="h6" size="x6">
                  Investing bot{" "}
                </Heading>
              </Box>
            </Center>
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
}
