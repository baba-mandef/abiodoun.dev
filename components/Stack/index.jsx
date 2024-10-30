import { SimpleGrid, Box, Center, } from "@chakra-ui/react";
// import Image from 'next/image'

export default function Stack() {
  const styles = {

    padding: '5px',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px rgba(0, 10, 64, 0.51)',
  }
  return (
    <>

      <Center>

    
      <SimpleGrid columns={{ base: "7", md: "7", lg: "7", sm: "4" }} spacing={{ base: "10", md: "10", lg: "10", sm: "4" }} pt="10px">
          
            <Box  boxSize={"50px"} style={styles}>
              <Center>
                <img src="img/python.png"   alt="python" />
              </Center>
            </Box>
         
       
            <Box boxSize={"50px"} style={styles}>
              <Center>
                <img src="img/php.png"   alt="php" />
              </Center>
            </Box>
        
       
            <Box  boxSize={"50px"} style={styles}>
              <Center>
                <img src="img/javascript.png"   alt="javascript " />
              </Center>
            </Box>
 

    
            <Box boxSize={"50px"} style={styles}>
              <Center>
                <img src="img/kt.png"   alt="kotlin" />
              </Center>
            </Box>


        
            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <img src="img/django.png"   alt="django" />
              </Center>
            </Box>
       

            <Box boxSize={"50px"} style={styles}>
              <Center>
                <img src="img/react.png"   alt="react" />
              </Center>
            </Box>
  

            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <img src="img/docker.png"   alt="docker"/>
              </Center>
            </Box>
       
     
        </SimpleGrid>  

     
      </Center>
    </>
  );
}
