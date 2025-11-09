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
  useColorModeValue
} from "@chakra-ui/react";
import Logo from "@/components/Logo";
import Name from "@/components/Name";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
var moment = require("moment");
import "moment/locale/fr";
moment.locale("fr");

const baseUrl = "https://mandef.rezolusoft.com/api/v1/";

export default function Post() {

  const commentBg = useColorModeValue('#f0f0f0', 'rgba(255, 255, 255, 0.08)');
  const commentBorder = useColorModeValue(
    '1px solid rgba(0, 0, 0, 0.05)',
    '1px solid rgba(255, 255, 255, 0.1)'
  );

  const modalBg = useColorModeValue('white', 'brand_second.500');
  const modalText = useColorModeValue('brand_second.500', 'whiteAlpha.900');
  const inputBg = useColorModeValue('white', 'rgb(1, 26, 90)');
  const inputBorder = useColorModeValue('gray.200', 'gray.600');

  const textColor = useColorModeValue('brand_second.500', 'whiteAlpha.900');
  const dateColor = useColorModeValue('brand.500', 'brand.200');
  const dividerColor = useColorModeValue('black', 'whiteAlpha.300');

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
        <ModalContent bg={modalBg}>
          <ModalHeader color={modalText}>
            Ajouter un commentaire
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel color={modalText}>Nom</FormLabel>
              <Input
                bg={inputBg}
                borderColor={inputBorder}
                _hover={{ borderColor: 'brand.500' }}
                _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px brand.500' }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom complet"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color={modalText}>Email</FormLabel>
              <Input
                bg={inputBg}
                borderColor={inputBorder}
                _hover={{ borderColor: 'brand.500' }}
                _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px brand.500' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Votre adresse électronique"
              />
              <FormHelperText color={'brand.500'}>
                Nous ne divulgerons jamais votre adresse.
              </FormHelperText>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color={modalText}>Commentaire</FormLabel>
              <Textarea
                bg={inputBg}
                borderColor={inputBorder}
                _hover={{ borderColor: 'brand.500' }}
                _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px brand.500' }}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Écrivez votre commentaire ici"
                rows={5}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button 
              colorScheme="brand" 
              onClick={handleCommentSubmit} 
              mr={3}
              bg={useColorModeValue('brand.500', 'brand.200')}
            >
              Envoyer
            </Button>
            <Button 
              onClick={onClose}
              variant="ghost"
              color={modalText}
            >
              Annuler
            </Button>
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
                        color={"text"}
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
                        color={"text"}
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
                            <Heading
                              as="h3"
                              textAlign={"center"}
                              size="lg"
                              mb={"10px"}
                              color={textColor}
                            >
                              Commentaires
                            </Heading>
                            <Button
                              onClick={onOpen}
                              mb={"10px"}
                              
                              variant="solid"
                              bg={useColorModeValue('brand.500', 'brand.500')}
                            >
                              Nouveau
                            </Button>
                          </HStack>
                        </Center>

                        <Divider bg={dividerColor} w="100%" h="1px" mb={"30px"} />

                        {comments.map((_comment) => (
                          <HStack key={_comment.id} mb={"30px"} align="flex-start">
                            <Avatar 
                              name={_comment.author_name}
                              size="sm"
                              mt={1}
                            />
                            <Box
                              p={4}
                              borderRadius={"lg"}
                              w={"100%"}
                              bg={commentBg}
                              border={commentBorder}
                              boxShadow="sm"
                              transition="all 0.2s"
                              _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'md'
                              }}
                            >
                              <Heading
                                color={dateColor}
                                as="h4"
                                size="sm"
                                fontWeight={"bold"}
                                pb={2}
                              >
                                {_comment.author_name}
                              </Heading>
                              <Text color={textColor}>{_comment.body}</Text>
                              <Text
                                color={dateColor}
                                fontSize="xs"
                                fontWeight={"bold"}
                                mt={3}
                                textAlign={"right"}
                              >
                                {moment(_comment.created_at).fromNow()}
                              </Text>
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
