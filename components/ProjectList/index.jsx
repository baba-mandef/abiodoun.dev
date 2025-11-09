import {
  Box,
  SimpleGrid,
  Center,
  Image,
  Heading,
  useToast
 
} from "@chakra-ui/react";

import Link from "next/link";

import { useState, useEffect } from "react";
import axios from "axios";

export default function ProjectList() {
  const styles = {
    backgroundImage: 'url("img/folder.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const toast = useToast();

  const baseUrl = "https://mandef.rezolusoft.com/api/v1/";

  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(baseUrl + "work");
      console.log(response.data);
      setProjects(response.data);
    } catch (e) {
      console.error("Error", e);
      
      toast({
        title: "Erreur",
        description:
          "Une erreur s'est produite lors du chargement des données",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <Center>
        <SimpleGrid
          columns={{ base: "4", sm: "3", md: "4", lg: "4" }}
          spacing={{ base: "5", sm: "2", md: "5", lg: "10" }}
        >
          {projects.map((project) => (
            <Box key={project.id}>
              <Link
                color={"brand.500"}
                href={"/projects/[slug]"}
                as={`/projects/${project.slug}`}
              >
                <Box boxSize={"120px"} style={styles} borderRadius={10}>
                  <Center>
                    <Image
                      mt="45px"
                      boxSize="40px"
                      src={project.logo}
                      alt="banner"
                    ></Image>
                  </Center>
                </Box>
                <Center>
                  <Box maxW="120px">
                    <Heading as="h6" size="x6">
                      {project.name}
                    </Heading>
                  </Box>
                </Center>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}
