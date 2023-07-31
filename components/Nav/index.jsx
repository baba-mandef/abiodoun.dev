import {
  Container,
  Center,
  HStack,
  Box,
  Divider,
  Icon,
  Heading,
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
          borderRadius="3xs"
          px={"10px"}
        >
          <Box>
            <Divider
              bg="brand.100"
              
              //bo3xshadow="0px 2px 2px rgba(0, 0, 0, 0.3)"
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
                    <Icon as={FaHome} color={"brand.500"} bo3xsize={15} mr="5px" />
                    <Heading fontWeight={"bold"} color={"brandark.500"} as={"h6"} size={"3xs"}>
                      Accueil
                    </Heading>
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
                      color={"brand.500"}
                      bo3xsize={15}
                      mr="5px"
                    />
                    <Heading fontWeight={"bold"} color={"brandark.500"} as={"h6"} size={"3xs"}>
                      Profil
                    </Heading>
                  </Center>
                </Box>
              </Link>

              <Link href="/blog">
                <Box mx="5px" as="button" p={"5px"} borderRadius={"5px"}
                style={ String(currentRoute).startsWith('/blog') ? activeStyle : nonActiveStyle}>
                  <Center>
                    <Icon
                      as={FaFileAlt}
                      color={"brand.500"}
                      bo3xsize={15}
                      mr="5px"
                    />
                    <Heading fontWeight={"bold"} color={"brandark.500"} as={"h6"} size={"3xs"}>
                      Blog
                    </Heading>
                  </Center>
                </Box>
              </Link>

              <Link href="/projects">
                <Box mx="5px" as="button" p={"5px"} borderRadius={"5px"}
                style={ String(currentRoute).startsWith('/projects') ? activeStyle : nonActiveStyle}>
                  <Center>
                    <Icon
                      as={FaBriefcase}
                      color={"brand.500"}
                      bo3xsize={15}
                      mr="5px"
                    />
                    <Heading fontWeight={"bold"} color={"brandark.500"} as={"h6"} size={"3xs"}>
                      Projets
                    </Heading>
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
