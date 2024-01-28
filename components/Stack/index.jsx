import { SimpleGrid, Box, Center, Image, } from "@chakra-ui/react";

export default function Stack() {
  const styles = {

    padding: '5px',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px rgba(0, 10, 64, 0.51)',
  }
  return (
    <>

      <Center>

    
      <SimpleGrid columns={{ base: "7", md: "7", lg: "7", sm: "7" }} spacing={{ base: "10", md: "10", lg: "10", sm: "7" }} pt="10px">
          
            <Box  boxSize={"50px"} style={styles}>
              <Center>
                <Image src="img/python.png"   alt="python"></Image>
              </Center>
            </Box>
         
       
            <Box boxSize={"50px"} style={styles}>
              <Center>
                <Image src="img/php.png"   alt="php"></Image>
              </Center>
            </Box>
        
       
            <Box  boxSize={"50px"} style={styles}>
              <Center>
                <Image src="img/javascript.png"   alt="javascript"></Image>
              </Center>
            </Box>
 

    
            <Box boxSize={"50px"} style={styles}>
              <Center>
                <Image src="img/kt.png"   alt="kotlin"></Image>
              </Center>
            </Box>


        
            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <Image src="img/django.png"   alt="django"></Image>
              </Center>
            </Box>
       

            <Box boxSize={"50px"} style={styles}>
              <Center>
                <Image src="img/react.png"   alt="react"></Image>
              </Center>
            </Box>
  

            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <Image src="img/docker.png"   alt="docker"></Image>
              </Center>
            </Box>
       
     
        </SimpleGrid>  

     
      </Center>
    </>
  );
}
