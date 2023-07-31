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
} from "@chakra-ui/react";

export default function AboutBio() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal
        isOpen={isOpen}
        size={{ base: "md", sm: "xs", md: "md", lg: "lg" }}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Envoyer un message</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your email address"
              />
              <FormHelperText color={"brand.500"}>
                We will never share your email.
              </FormHelperText>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Your comment</FormLabel>
              <Textarea
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment here"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="brand" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Center>
        <Box>
          <Text
            align="justify"
            fontSize="16"
            color={"brandark.500"}
            my="10"
            mb="5"
            p="2"
          >
            Je suis{" "}
            <Box color="brand.500" as="span">
              Abiodoun Paraïso
            </Box>
            , un développeur de logiciels basé au Bénin. Je travaille
            principalement sur des projets web, mais je m'implique également
            dans la création de solutions applicatives multiplateformes et dans
            la contribution à des projets{" "}
            <Box
              as="a"
              href="https://github.com/baba-mandef"
              target="_blank"
              color={"brand.500"}
              textDecoration={"underline"}
            >
              open source sur GitHub
            </Box>
            .
            <br />
            <br />
            Au fil du temps, j'ai acquis de nombreuses compétences en utilisant
            diverses techniques, frameworks, outils et langages de
            programmation.
            <br /> <br />
            Mon objectif est de concevoir des expériences numériques agréables,
            en m'appuyant sur des systèmes solides et ergonomiques, afin
            d'améliorer la vie quotidienne des utilisateurs. Je privilégie une
            approche itérative et créative pour optimiser mes solutions
            numériques tout en résolvant efficacement les problèmes.
            <br />
            <br />
            Je suis ouvert aux collaborations et à toutes autres opportunités
            professionnelles. Si vous avez des questions, des suggestions ou
            simplement envie de discuter, n'hésitez pas à me{" "}
            <Box
              color={"brand.500"}
              onClick={onOpen}
              as="button"
              textDecoration={"underline"}
            >
              laisser un message
            </Box>
            .
          </Text>
        </Box>
      </Center>
    </>
  );
}
