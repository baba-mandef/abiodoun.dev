import { Grid, GridItem, Box, Center, Image, Flex } from "@chakra-ui/react";

export default function Stack() {
  return (
    <>
      <Center>

      <Flex>
      <Grid templateColumns="repeat(9, 1fr)" gap={2} pt="10px" mx="10">
          <GridItem w="100%"  h="100%">
            <Box  >
              <Center>
                <Image src="img/python.png"   alt="python"></Image>
              </Center>
            </Box>
          </GridItem>
          
          <GridItem w="100%"  h="100%">
            <Box  >
              <Center>
                <Image src="img/django.png"   alt="django"></Image>
              </Center>
            </Box>
          </GridItem>

          <GridItem w="100%"  h="100%">
            <Box  >
              <Center>
                <Image src="img/php.png"   alt="php"></Image>
              </Center>
            </Box>
          </GridItem>

          <GridItem w="100%"  h="100%">
            <Box  >
              <Center>
                <Image src="img/postgresql.png"   alt="postgresql"></Image>
              </Center>
            </Box>
          </GridItem>

          <GridItem w="100%"  h="100%">
            <Box  >
              <Center>
                <Image src="img/javascript.png"   alt="javascript"></Image>
              </Center>
            </Box>
          </GridItem>

          <GridItem w="100%"  h="100%">
            <Box  >
              <Center>
                <Image src="img/react.png"   alt="react"></Image>
              </Center>
            </Box>
          </GridItem>
          <GridItem w="100%"  h="100%">
            <Box  >
              <Center>
                <Image src="img/vue.png"   alt="vue"></Image>
              </Center>
            </Box>
          </GridItem>

          <GridItem w="100%"  h="100%">
            <Box  >
              <Center>
                <Image src="img/docker.png"   alt="docker"></Image>
              </Center>
            </Box>
          </GridItem>
          <GridItem w="100%"  h="100%">
            <Box  >
              <Center>
                <Image src="img/figma.png"   alt="docker"></Image>
              </Center>
            </Box>
          </GridItem>
        </Grid>  
      </Flex>   
     
      </Center>
    </>
  );
}
