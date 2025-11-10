/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Center,
  Text,
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
  Button,
  Menu,
  Portal,
  useColorModeValue
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function AboutBio() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const baseUrl = "https://djehuty.rezolusoft.com/api/v1/";
  const handleMessageSubmit = async () => {
    try {
      if (name && email && message != "") {
        const FormData = require("form-data");
        const form = new FormData();

        form.append("sender_name", name);
        form.append("sender_email", email);
        form.append("body", message);

        const response = await axios.post(`${baseUrl}message/new`, form);
        console.log(response.data);
        toast({
          title: "Message envoyé",
          description: "Votre message à été envoyé avec succes. Merci !",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
      }
      else{
        toast({
          title: "Erreur",
          description:
            "Tous les champs sont requis",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      }
    } catch (e) {
      console.error("Error", e);
      toast({
        title: "Erreur",
        description:
          "Une erreur s'est produite",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        size={{ base: "xs", sm: "xs", md: "md", lg: "lg" }}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Envoyer un message</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nom</FormLabel>
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Votre adresse électronique"
              />
              <FormHelperText color={"brand.500"}>
                Nous ne divulgerons jamais votre adresse.
              </FormHelperText>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Saisissez votre message ici"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="brand" bg={useColorModeValue('brand.500', 'brand.500')} onClick={handleMessageSubmit} mr={3}>
              Envoyer
            </Button>
            <Button onClick={onClose}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Center>
        <Box>
          <Text
            align="justify"
            fontSize="16"
            color={"text"}
            my="10"
            mb="5"
            p="2"
          >
            Je suis{" "}
            <Box color="brand.500" as="span">
              Abiodoun Paraïso
            </Box>
            , développeur de logiciels basé au Bénin🇧🇯. Je travaille
            principalement sur des projets web et des solutions applicatives multiplateformes.
            Je partage également mes connaissances et expériences en tant que professeur d'informatique au supérieur. 
            <br />
            <br />
            Au fil du temps, j'ai acquis de nombreuses compétences en explorant divers langages, 
            frameworks et outils, notamment à travers mes contributions à des projets {" "}
            <Box
              as="a"
              href="https://github.com/baba-mandef"
              target="_blank"
              color={"brand.500"}
              textDecoration={"underline"}
            >
              open source sur GitHub.
            </Box>
            <br /> <br />
            Mon objectif est de concevoir des expériences numériques agréables,
            en m'appuyant sur des systèmes solides et ergonomiques, afin
            de résoudre les problème du quotidien. Je privilégie une
            approche  🔄itérative et 💡créative  pour optimiser ⚙️ mes solutions.
            <br />
            <br />
            Ouvert aux collaborations🤝🏾 et à toutes autres opportunités
            professionnelles. Pour toute questions ou suggestions, n'hésitez pas à me{" "}
            <Box
              color={"brand.500"}
              onClick={onOpen}
              as="button"
              textDecoration={"underline"}
            >
              laisser un message 
            </Box>
            ✉️.
          </Text>
        </Box>
      </Center>
    </>
  );
}
