import { SimpleGrid, Box, Center, Image, } from "@chakra-ui/react";
import Tech from "@/components/Tech";

export default function Stack() {
 
  return (
    <>

      <Center>

    
      <SimpleGrid columns={{ base: "6", md: "6", lg: "6", sm: "4",}} spacing={{ base: "10", md: "10", lg: "10", sm: "8" }} pt="10px">
          
             <Tech img="img/python.png" name="python"></Tech>

            <Tech img="img/php.png" name="php"></Tech>
       
            <Tech img="img/javascript.png" name="javascript"></Tech>
 
            <Tech img="img/django.png" name="django"></Tech>

             {/* <Tech img="img/docker.png" name="docker"></Tech> */}

             <Tech img="img/react.png" name="react"></Tech>

             <Tech img="svg/flet.svg" name="flet"></Tech>
  
             <Tech img="img/mysql.png" name="mysql"></Tech>

             <Tech img="img/postgresql.png" name="postgresql"></Tech>
            
             <Tech img="img/gimp.png" name="gimp"></Tech>

             <Tech img="img/figma.png" name="figma"></Tech>

             <Tech img="img/ink.png" name="inkscape"></Tech>
            
             <Tech img="img/kdenlive.png" name="kdenlive"></Tech>

            
       
     
        </SimpleGrid>  

     
      </Center>
    </>
  );
}
