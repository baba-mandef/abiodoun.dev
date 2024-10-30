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
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Logo from "@/components/Logo";
import Name from "@/components/Name";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProjectDetails() {
  const baseUrl = "https://abiodoun.rezolusoft.com/api/v1/";
  const router = useRouter();

  /* const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false); */
  const [project, setProject] = useState(true);
  const [stack, setStack] = useState([]);

  const toast = useToast();

  const fetchProjectDetails = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}work?slug=${router.query.slug}`
      );

      console.log(response.data);
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
    <>
      <>
        <Center mb="80px" mt="20">
          <Grid>
            <GridItem>
              <Logo />
            </GridItem>
            <GridItem>
              <Name />
            </GridItem>
            <GridItem>
              <Center>
                <Heading
                  fontSize={{
                    base: "20x",
                    md: "20px",
                    lg: "20px",
                    sm: "20px",
                  }}
                  as={"h5"}
                  size={"md"}
                  fontWeight={"bold"}
                  fontStyle={"bold"}
                  color={"brand.500"}
                  textAlign={"center"}
                  m="5"
                >
                  {project.name}
                </Heading>
              </Center>
            </GridItem>

            <GridItem pt={8}>
              <Wrap justify="center" spacing="20px">
                <WrapItem
                  maxW={{ base: "400", md: "400", lg: "400", sm: "300" }}
                >
                  <Image
                    src={project.banner}
                    boxShadow={"lg"}
                    alt="banner"
                    borderRadius="lg"
                  />
                </WrapItem>

                {/*  <WrapItem ml={5} mr={5}>
                   
                  </WrapItem>
 */}
                <WrapItem>
                  <Grid pt={{ base: "0", md: "0", lg: "0", sm: "5" }}>
                    {/* <GridItem mb={3}>
                      <Heading
                        color={"brand.500"}
                        as={"h5"}
                        size={"sm"}
                        textAlign={{
                          base: "left",
                          md: "left",
                          lg: "left",
                          sm: "center",
                        }}
                      >
                        {project.name}
                      </Heading>
                    </GridItem> */}
                    <GridItem>
                      <Box
                        color={"brandark.500"}
                        fontSize={{
                          base: "16px",
                          md: "16px",
                          lg: "16px",
                          sm: "16px",
                        }}
                        overflowWrap={"break-word"}
                        maxW={{
                          base: "sm",
                          md: "md",
                          lg: "sm",
                          sm: "sm",
                        }}
                        ml={{ base: "0", md: "0", lg: "0", sm: "10" }}
                        mr={{ base: "0", md: "0", lg: "0", sm: "10" }}
                        as="div"
                        textAlign={"justify"}
                        dangerouslySetInnerHTML={handleMarkup(project.body)}
                      ></Box>
                      <Box
                        as="div"
                        borderTop="3px dotted"
                        borderTopColor={"brand.500"}
                        ml={{ base: "0", md: "0", lg: "0", sm: "10" }}
                        mr={{ base: "0", md: "0", lg: "0", sm: "10" }}
                        mt={"5"}
                        mb={"2"}
                      ></Box>

                      <Box
                        mt={5}
                        ml={{ base: "0", md: "0", lg: "0", sm: "10" }}
                        mr={{ base: "0", md: "0", lg: "0", sm: "10" }}
                      >
                        <Flex>
                          <Box>
                            <HStack spacing={4}>
                              {stack.map((stack) => (
                                <Tag
                                  key={stack}
                                  variant="solid"
                                  colorScheme="brand"
                                >
                                  {stack}
                                </Tag>
                              ))}
                            </HStack>
                          </Box>
                          <Spacer />
                          <Box>
                            <HStack spacing={4}>
                              {project.repo == "none" ? (
                                <></>
                              ) : (
                                <Box
                                  as="a"
                                  href={project.repo}
                                  target="_blank"
                                  textDecoration={"none"}
                                >
                                  <Tag variant="outline" colorScheme="brandark">
                                    <TagLeftIcon as={FaGithub} />
                                    <TagLabel>Github</TagLabel>
                                  </Tag>
                                </Box>
                              )}
                              <Box
                                  as="a"
                                  href={project.link}
                                  target="_blank"
                                  textDecoration={"none"}
                                >
                              <Tag variant="outline" colorScheme="brandark">
                                <TagLeftIcon as={FaExternalLinkAlt} />
                                <TagLabel>Visiter</TagLabel>
                              </Tag>
                              </Box>
                            </HStack>
                          </Box>
                        </Flex>
                      </Box>
                    </GridItem>
                  </Grid>
                </WrapItem>
              </Wrap>
            </GridItem>
          </Grid>
        </Center>
      </>
    </>
  );
}
