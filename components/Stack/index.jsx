import { SimpleGrid, GridItem, Box, Center, Image, Flex } from "@chakra-ui/react";

export default function Stack() {
  return (
    <>
      <Center>

    
      <SimpleGrid columns={{ base: "4", md: "4", lg: "8", sm: "4" }} spacing={{ base: "10", md: "10", lg: "10", sm: "7" }} pt="10px">
          
            <Box  boxSize={"50px"}>
              <Center>
                <Image src="img/python.png"   alt="python"></Image>
              </Center>
            </Box>
         
       
            <Box boxSize={"50px"}  >
              <Center>
                <Image src="img/php.png"   alt="php"></Image>
              </Center>
            </Box>
        
       
            <Box  boxSize={"50px"} >
              <Center>
                <Image src="img/javascript.png"   alt="javascript"></Image>
              </Center>
            </Box>
 

    
            <Box boxSize={"50px"} >
              <Center>
                <Image src="img/kt.png"   alt="kotlin"></Image>
              </Center>
            </Box>


        
            <Box boxSize={"50px"}  >
              <Center>
                <Image src="img/django.png"   alt="django"></Image>
              </Center>
            </Box>
       

            <Box boxSize={"50px"}  >
              <Center>
                <Image src="img/docker.png"   alt="docker"></Image>
              </Center>
            </Box>
       
            <Box boxSize={"50px"}  >
              <Center>
                <Image src="img/nuxt.png"   alt="nuxt"></Image>
              </Center>
            </Box>
     
            <Box boxSize={"50px"} >
              <Center>
                <Image src="img/react.png"   alt="react"></Image>
              </Center>
            </Box>
  
        </SimpleGrid>  

     
      </Center>
    </>
  );
}
