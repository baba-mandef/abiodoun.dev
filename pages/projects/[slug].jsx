"use client";
import {
  Center,
  Grid,
  GridItem,
  Text,
  Box,
  Wrap,
  WrapItem,
  Image,
  Heading,
  HStack,
  Tag,
  useToast,
  TagLeftIcon,
  TagLabel,
  Flex,
  Spacer,
  useColorModeValue,
  Divider,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Logo from "@/components/Logo";
import Name from "@/components/Name";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProjectDetails() {
  const baseUrl = "https://mandef.rezolusoft.com/api/v1/";
  const router = useRouter();
  const [project, setProject] = useState({});
  const [stack, setStack] = useState([]);
  const toast = useToast();

  // Couleurs adaptatives
  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.7)', 'rgba(0, 10, 64, 0.5)');
  const cardBorder = useColorModeValue('1px solid rgba(0, 0, 0, 0.05)', '1px solid rgba(255, 255, 255, 0.1)');
  const textColor = useColorModeValue('brand_second.500', 'whiteAlpha.900');
  const accentColor = useColorModeValue('brand.500', 'brand.200');
  const dividerColor = useColorModeValue('brand.500', 'brand.200');

  const fetchProjectDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}work?slug=${router.query.slug}`);
      setProject(response.data[0]);
      setStack(response.data[0].stack.split(","));
    } catch (e) {
      console.error("Error", e);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors du chargement des données",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleMarkup = (html) => {
    return { __html: html };
  };

  useEffect(() => {
    if (router.isReady) {
      fetchProjectDetails();
    }
  }, [router.isReady]);

  return (
    <Box minH="100vh">
      <Center py={10}>
        <Grid maxW={{ base: "80%", md: "80%", lg: "80%",  }}>
          <GridItem mb={8}>
            <VStack spacing={4}>
              <Logo />
              <Name />
            </VStack>
          </GridItem>

          <GridItem>
            <Box 
              bg={cardBg}
              backdropFilter="blur(10px)"
              border={cardBorder}
              borderRadius="xl"
              p={6}
              boxShadow="lg"
              mb={8}
            >
              <Heading
                as="h2"
                size="lg"
                fontWeight="bold"
                color={accentColor}
                textAlign="center"
                mb={6}
              >
                {project.name}
              </Heading>

              <Wrap justify="center" spacing={8} align="center">
                <WrapItem flex="1" minW={{ base: "100%", md: "400px" }}>
                  <Image
                    src={project.banner}
                    alt="Project banner"
                    borderRadius="lg"
                    boxShadow="xl"
                    w="full"
                    objectFit="cover"
                  />
                </WrapItem>

                <WrapItem flex="1" minW={{ base: "100%", md: "400px" }}>
                  <VStack spacing={6} align="stretch">
                    
                    <Box
                      color={textColor}
                      fontSize="md"
                      textAlign="justify"
                      dangerouslySetInnerHTML={handleMarkup(project.body)}
                    />

                    <Divider borderColor={dividerColor} borderStyle="dotted" borderWidth="2px" />

                    <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
                      <HStack spacing={2} wrap="wrap" mb={{ base: 4, md: 0 }}>
                        {stack.map((tech) => (
                          <Tag key={tech} colorScheme="brand" size="md" m={1}>
                            {tech}
                          </Tag>
                        ))}
                      </HStack>

                      <HStack spacing={4}>
                        {project.repo !== "none" && (
                          <Link href={project.repo} isExternal>
                            <Tag variant="outline" color={"text"}  size="md">
                              <TagLeftIcon as={FaGithub} />
                              <TagLabel>Code</TagLabel>
                            </Tag>
                          </Link>
                        )}
                        <Link href={project.link}  isExternal>
                          <Tag variant="outline"   color={"text"} size="md">
                            <TagLeftIcon as={FaExternalLinkAlt} />
                            <TagLabel>Visiter</TagLabel>
                          </Tag>
                        </Link>
                      </HStack>
                    </Flex>
                  </VStack>
                </WrapItem>
              </Wrap>
            </Box>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
}