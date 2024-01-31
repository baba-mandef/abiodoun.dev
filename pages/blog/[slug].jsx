"use client";
import {
  Container,
  Heading,
  Grid,
  Image,
  Box,
  GridItem,
  Text,
  Center,
  Divider,
  HStack,
  Avatar,
  Skeleton,
  SkeletonText,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import Logo from "@/components/Logo";
import Name from "@/components/Name";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
var moment = require("moment");
import "moment/locale/fr";
moment.locale("fr");

const baseUrl = "https://api.abiodoun.dev/api/v1/";

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const toast = useToast();

  const handleCommentSubmit = async () => {
    try {
      if (name && email && comment != "") {
        const FormData = require("form-data");
        const form = new FormData();

        form.append("author_name", name);
        form.append("author_mail", email);
        form.append("body", comment);
        form.append("post", post.id);

        const response = await axios.post(`${baseUrl}blog/comment`, form);
        console.log(response.data);
        fetchComments();
        toast({
          title: "Commentaire envoyé",
          description:
            "Votre commentaire à été soumis avec succes ! Merci d'avoir lu.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
      } else {
        toast({
          title: "Erreur",
          description: "Tous les champs sont requis",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (e) {
      console.error("Error", e);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}blog/comment?post=${router.query.slug}`
      );
      console.log(response.data);
      setComments(response.data);
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

  const fetchPostDetails = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}blog/post?slug=${router.query.slug}`
      );
      console.log(response.data);
      setPost(response.data[0]);
      fetchComments();
      setLoading(false);
      setLoaded(true);
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
      fetchPostDetails();
    }
  }, [router.isReady]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* 

        ****************************************
        ************* COMMENT MODAL ************
        ****************************************
      
      */}
      <Modal
        isOpen={isOpen}
        size={{ base: "md", sm: "xs", md: "md", lg: "lg" }}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"brandark.500"}>
            Ajouter un commentaire
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel color={"brandark.500"}>Nom</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom complet"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color={"brandark.500"}>Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Votre adresse électronique"
              />
              <FormHelperText color={"brand.500"}>
                Nous ne divulgerons jamais votre adresse.
              </FormHelperText>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color={"brandark.500"}>Commentaire</FormLabel>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ecrivez votre commentaire ici"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="brand" onClick={handleCommentSubmit} mr={3}>
              Envoyer
            </Button>
            <Button onClick={onClose}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* 

        ****************************************
        ************* MAIN CONTENT *************
        ****************************************
      
      */}

      <Center mx="5%" mb="80px" mt="20">
        <Grid>
          <GridItem>
            <Logo />
          </GridItem>
          <GridItem>
            <Name />
          </GridItem>
          {/* 

        ****************************************
        *************** SEKELETON **************
        ****************************************
      
          */}

          <GridItem hidden={loaded}>
            <Box padding="6" w={{ base: "3xl", md: "lg", lg: "3xl", sm: "sm" }}>
              <Skeleton height="250px" />
              <SkeletonText
                mt="4"
                noOfLines={10}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          </GridItem>

          {/* 

        ****************************************
        ************** POST CONTENT ************
        ****************************************
      
          */}

          <GridItem hidden={loading}>
            <Center>
              <Container
                maxW={{ base: "3xl", md: "3xl", sm: "md" }}
                mt={"20px"}
              >
                <Center>
                  <Grid>
                    <GridItem>
                      <Text
                        textAlign={"center"}
                        color={"brand.500"}
                        fontSize={{
                          base: "18px",
                          md: "18px",
                          lg: "18px",
                          sm: "13px",
                        }}
                        fontWeight={"bold"}
                      >
                        {moment(post.created_at).format("Do MMMM YYYY")}
                      </Text>
                    </GridItem>
                    <GridItem mt={"30px"}>
                      <Heading
                        as={"h3"}
                        color={"brandark.500"}
                        size={"lg"}
                        textAlign={"center"}
                      >
                        {String(post.title).toUpperCase()}
                      </Heading>
                    </GridItem>
                    <GridItem mt={"20px"}>
                      <Image
                        src={post.banner}
                        boxShadow={"md"}
                        alt="banner"
                        borderRadius="lg"
                      />
                    </GridItem>
                    <GridItem mt={"30px"}>
                      <Box
                        color={"brandark.500"}
                        fontSize={{
                          base: "16px",
                          md: "16px",
                          lg: "16px",
                          sm: "13px",
                        }}
                        overflowWrap={"break-word"}
                        maxW={{
                          base: "2xl",
                          md: "lg",
                          lg: "3xl",
                          sm: "md",
                        }}
                        m="auto"
                        as="div"
                        textAlign={"justify"}
                        dangerouslySetInnerHTML={handleMarkup(post.post)}
                      ></Box>
                    </GridItem>

                    <GridItem mt={"30px"}>
                      <Center>
                        <HStack>
                          <Box>
                            <Heading
                              as="h3"
                              textAlign={"center"}
                              size="lg"
                              mb={"10px"}
                              color={"brandark.500"}
                            >
                              Commentaires
                            </Heading>
                          </Box>
                          <Box>
                            <Button
                              onClick={onOpen}
                              mb={"10px"}
                              colorScheme="brand"
                              variant="solid"
                            >
                              Nouveau
                            </Button>
                          </Box>
                        </HStack>
                      </Center>

                      <Divider bg="black" w="100%" h="1px" mb={"30px"} />
                      {/*
                       ****************************************
                       ************** COMMENT LIST ************
                       **************************************** */}

                      {comments.map((_comment) => (
                        <HStack key={_comment.id} mb={"30px"}>
                          <Box alignSelf={"start"}>
                            <Avatar
                              name={_comment.author_name}
                              /* O */
                            ></Avatar>
                          </Box>
                          <Box
                            /*  border={"1px"} */
                            p={"10px"}
                            borderRadius={"10px"}
                            w={"100%"}
                            bgColor={"#e6e6e6"}
                          >
                            <Heading
                              textColor={"brand.500"}
                              as="h4"
                              size="sm"
                              fontWeight={"bold"}
                              pb={"5px"}
                            >
                              {_comment.author_name}
                            </Heading>

                            <Text color={"brandark.500"}>{_comment.body}</Text>

                            <Heading
                              textColor={"brandark.500"}
                              as="h4"
                              size="xs"
                              fontWeight={"bold"}
                              pb={"5px"}
                              mt={"15px"}
                              textAlign={"right"}
                            >
                              {moment(_comment.created_at).fromNow()}
                            </Heading>
                          </Box>
                        </HStack>
                      ))}
                    </GridItem>
                  </Grid>
                </Center>
              </Container>
            </Center>
          </GridItem>
        </Grid>
      </Center>
    </>
  );
}
