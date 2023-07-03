import {
  Container,
  Center,
  HStack,
  Box,
  Divider,
  Icon,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { FaHome, FaUserCircle, FaFileAlt, FaBriefcase } from "react-icons/fa";

function Nav() {
  const router = useRouter();
  return (
    <>
      <Center>
        <Container
          w="100%"
          bgColor="#fff"
          mx="5"
          pos="fixed"
          bottom="0"
          pb="20px"
          centerContent
        >
          <Box>
            <Divider
              bg="gray"
              //boxShadow="0px 2px 2px rgba(0, 0, 0, 0.3)"
              w="100%"
              h="1px"
            />

            <HStack pt="15px">
            <Box mx="10px" as="button" onClick={() => router.push("/")}>
                <Center>
                  <Icon as={FaHome} color={"#ff7624"} boxSize={15} mr="10px" />
                  <Text fontWeight={"bold"} fontSize={"14"}>
                    Home
                  </Text>
                </Center>
              </Box>

              <Box mx="10px" as="button" onClick={() => router.push("/about")}>
                <Center>
                  <Icon
                    as={FaUserCircle}
                    color={"#ff7624"}
                    boxSize={15}
                    mr="10px"
                  />
                  <Text fontWeight={"bold"} fontSize={"14"}>
                    About
                  </Text>
                </Center>
              </Box>

              <Box mx="10px" as="button" onClick={() => router.push("/posts")}>
                <Center>
                  <Icon
                    as={FaFileAlt}
                    color={"#ff7624"}
                    boxSize={15}
                    mr="10px"
                  />
                  <Text fontWeight={"bold"} fontSize={"14"}>
                    Blog {router.pathname}
                  </Text>
                </Center>
              </Box>
              <Box
                mx="10px"
                as="button"
                onClick={() => router.push("/projects")}
              >
                <Center>
                  <Icon
                    as={FaBriefcase}
                    color={"#ff7624"}
                    boxSize={15}
                    mr="10px"
                  />
                  <Text fontWeight={"bold"} fontSize={"14"}>
                    Projects
                  </Text>
                </Center>
              </Box>
            </HStack>
          </Box>
        </Container>
      </Center>
    </>
  );
}
export default Nav;
