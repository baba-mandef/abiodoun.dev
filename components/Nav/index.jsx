import {
  Container,
  Center,
  HStack,
  Box,
  Divider,
  Icon,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUserCircle, FaFileAlt, FaBriefcase } from "react-icons/fa";

export default function Nav() {

  const activeStyle = {backgroundColor: "#ff762457"}; 
  const nonActiveStyle ={backgroundColor: "#ffffff"};
  const currentRoute = usePathname();

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
          borderRadius="lg"
          px={"10px"}
        >
          <Box>
            <Divider
              bg="gray"
              //boxShadow="0px 2px 2px rgba(0, 0, 0, 0.3)"
              w="100%"
              h="1px"
            />

            <HStack pt="15px">
              <Link href="/">
                <Box
                  mx="5px"
                  p={"5px"}
                  borderRadius={"5px"}
                  as="button"
                  style={currentRoute === '/' ? activeStyle : nonActiveStyle}
                >
                  <Center>
                    <Icon as={FaHome} color={"#ff7624"} boxSize={15} mr="5px" />
                    <Text fontWeight={"bold"} color={"#000000"} fontSize={"14"}>
                      Home
                    </Text>
                  </Center>
                </Box>
              </Link>

              <Link href="/about">
                <Box mx="5px" as="button" p={"5px"} borderRadius={"5px"}
                style={currentRoute === '/about' ? activeStyle : nonActiveStyle}
                >
                  <Center>
                    <Icon
                      as={FaUserCircle}
                      color={"#ff7624"}
                      boxSize={15}
                      mr="5px"
                    />
                    <Text fontWeight={"bold"} color={"#000000"} fontSize={"14"}>
                      About
                    </Text>
                  </Center>
                </Box>
              </Link>

              <Link href="/blog">
                <Box mx="5px" as="button" p={"5px"} borderRadius={"5px"}
                style={currentRoute === '/blog' ? activeStyle : nonActiveStyle}>
                  <Center>
                    <Icon
                      as={FaFileAlt}
                      color={"#ff7624"}
                      boxSize={15}
                      mr="5px"
                    />
                    <Text fontWeight={"bold"} color={"#000000"} fontSize={"14"}>
                      Blog
                    </Text>
                  </Center>
                </Box>
              </Link>
              <Link href="/projects">
                <Box mx="5px" as="button" p={"5px"} borderRadius={"5px"}
                style={currentRoute === '/projects' ? activeStyle : nonActiveStyle}>
                  <Center>
                    <Icon
                      as={FaBriefcase}
                      color={"#ff7624"}
                      boxSize={15}
                      mr="5px"
                    />
                    <Text fontWeight={"bold"} color={"#000000"} fontSize={"14"}>
                      Projects
                    </Text>
                  </Center>
                </Box>
              </Link>
            </HStack>
          </Box>
        </Container>
      </Center>
    </>
  );
}
