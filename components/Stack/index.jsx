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

    
      <SimpleGrid columns={{ base: "8", md: "8", lg: "8", sm: "4",}} spacing={{ base: "10", md: "10", lg: "10", sm: "8" }} pt="10px">
          
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
                <Image src="img/dart.png"   alt="dart"></Image>
              </Center>
            </Box>


        
            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <Image src="img/django.png"   alt="django"></Image>
              </Center>
            </Box>
       
            <Box boxSize={"50px"} style={styles}>
              <Center>
                <Image src="img/vue.png"   alt="vue"></Image>
              </Center>
            </Box>

            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <Image src="img/docker.png"   alt="docker"></Image>
              </Center>
            </Box>

            <Box boxSize={"50px"} style={styles}>
              <Center>
                <Image src="img/react.png"   alt="react"></Image>
              </Center>
            </Box>

            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <Image src="img/flutter.png"   alt="flutter"></Image>
              </Center>
            </Box>
  
            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <Image src="img/electron.png"   alt="mysql"></Image>
              </Center>
            </Box>

            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <Image src="img/mysql.png"   alt="mysql"></Image>
              </Center>
            </Box>
            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <Image src="img/postgresql.png"   alt="postgresql"></Image>
              </Center>
            </Box>
            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <Image src="img/gimp.png"   alt="gimp"></Image>
              </Center>
            </Box>
            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <Image src="img/figma.png"   alt="figma"></Image>
              </Center>
            </Box>
            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <Image src="img/ink.png"   alt="inkscape"></Image>
              </Center>
            </Box>
            <Box boxSize={"50px"}  style={styles}>
              <Center>
                <Image src="img/kdenlive.png"   alt="kdenlive"></Image>
              </Center>
            </Box>

            
       
     
        </SimpleGrid>  

     
      </Center>
    </>
  );
}
