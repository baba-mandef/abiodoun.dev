import {
  Container,
  Center,
  HStack,
  Box,
  Divider,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaUserCircle, FaFileAlt, FaBriefcase } from "react-icons/fa";

function Nav() {
  return (
    <>
      <Center>
        <Container
          w="100%"
          bgColor="#fff"
          mx="5"
          pos="fixed"
          bottom="0"
          pb="60"
          centerContent
        >
          <Box>
            <Divider
              bg="gray"
              boxShadow="0px 3px 3px rgba(0, 0, 0, 0.5)"
              w="100%"
              h="1px"
            />

            <HStack pt="15px">
              <Box mx="20px">
                <Center>
                  <Icon
                    as={FaUserCircle}
                    color={"#ff7624"}
                    boxSize={15}
                    mr="10px"
                  />
                  <Text fontWeight={"bold"} fontSize={"16"}>
                    About
                  </Text>
                </Center>
              </Box>
              <Box mx="20px">
                <Center>
                  <Icon
                    as={FaFileAlt}
                    color={"#ff7624"}
                    boxSize={15}
                    mr="10px"
                  />
                  <Text fontWeight={"bold"} fontSize={"16"}>
                    Blog
                  </Text>
                </Center>
              </Box>
              <Box mx="20px">
                <Center>
                  <Icon
                    as={FaBriefcase}
                    color={"#ff7624"}
                    boxSize={15}
                    mr="10px"
                  />
                  <Text fontWeight={"bold"} fontSize={"16"}>
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
