import {
  Container,
  Center,
  HStack,
  Box,
  Icon,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUserCircle, FaFileAlt, FaBriefcase } from "react-icons/fa";
import SettingsMenu from "@/components/SettingsMenu";

export default function Nav() {
  const currentRoute = usePathname();
  
  // Couleurs adaptatives
  const activeBg = useColorModeValue("#ff762457", "rgba(255, 118, 36, 0.3)");
  const inactiveBg = useColorModeValue("rgba(0, 10, 64, 0)", "rgba(255, 255, 255, 0.05)");
  const headingColor = useColorModeValue("brand_second.500", "whiteAlpha.900");
  
  // Glassmorphism adaptatif
  const glassStyle = {
    background: useColorModeValue(
      "rgba(255, 255, 255, 0.7)",
      "rgba(0, 10, 64, 0.5)"
    ),
    borderRadius: "10px 10px 0px 0px",
    boxShadow: useColorModeValue(
      "0 4px 30px rgba(0, 0, 0, 0.1)",
      "0 4px 30px rgba(0, 0, 0, 0.3)"
    ),
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: useColorModeValue(
      "1px solid rgba(255, 255, 255, 0.08)",
      "1px solid rgba(255, 255, 255, 0.1)"
    ),
  };

  const getActiveStyle = (isActive) => ({
    backgroundColor: isActive ? activeBg : inactiveBg,
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    transition: "all 0.3s ease",
  });

  return (
    <Center>
      <Container
        w="max-content"
        sx={glassStyle}
        mx="5px"
        pos="fixed"
        bottom="0"
        pb="15px"
        centerContent
        borderRadius="5px"
        px="15px"
      >
        <Box>
          <HStack pt="15px">
            <Link href="/">
              <Box
                mx="2px"
                p="2px"
                borderRadius="5px"
                as="button"
                sx={getActiveStyle(currentRoute === "/")}
                _hover={{
                  bg: useColorModeValue("rgba(0, 10, 64, 0.1)", "rgba(255, 255, 255, 0.1)"),
                }}
              >
                <Center>
                  <Icon as={FaHome} color="brand.500" boxSize={15} mr="5px" />
                  <Heading
                    fontWeight="bold"
                    color={headingColor}
                    as="h6"
                    size={{ base: "xs", sm: "xs", md: "3xs" }}
                  >
                    Accueil
                  </Heading>
                </Center>
              </Box>
            </Link>

            <Link href="/about">
              <Box
                mx="2px"
                as="button"
                p="2px"
                borderRadius="5px"
                sx={getActiveStyle(currentRoute === "/about")}
                _hover={{
                  bg: useColorModeValue("rgba(0, 10, 64, 0.1)", "rgba(255, 255, 255, 0.1)"),
                }}
              >
                <Center>
                  <Icon as={FaUserCircle} color="brand.500" boxSize={15} mr="5px" />
                  <Heading
                    fontWeight="bold"
                    color={headingColor}
                    as="h6"
                    size={{ base: "xs", sm: "xs", md: "3xs" }}
                  >
                    Profil
                  </Heading>
                </Center>
              </Box>
            </Link>

            <Link href="/blog">
              <Box
                mx="2px"
                as="button"
                p="2px"
                borderRadius="5px"
                sx={getActiveStyle(String(currentRoute).startsWith("/blog"))}
                _hover={{
                  bg: useColorModeValue("rgba(0, 10, 64, 0.1)", "rgba(255, 255, 255, 0.1)"),
                }}
              >
                <Center>
                  <Icon as={FaFileAlt} color="brand.500" boxSize={15} mr="5px" />
                  <Heading
                    fontWeight="bold"
                    color={headingColor}
                    as="h6"
                    size={{ base: "xs", sm: "xs", md: "3xs" }}
                  >
                    Blog
                  </Heading>
                </Center>
              </Box>
            </Link>

            <Link href="/projects">
              <Box
                mx="2px"
                as="button"
                p="2px"
                borderRadius="5px"
                sx={getActiveStyle(String(currentRoute).startsWith("/projects"))}
                _hover={{
                  bg: useColorModeValue("rgba(0, 10, 64, 0.1)", "rgba(255, 255, 255, 0.1)"),
                }}
              >
                <Center>
                  <Icon as={FaBriefcase} color="brand.500" boxSize={15} mr="5px" />
                  <Heading
                    fontWeight="bold"
                    color={headingColor}
                    as="h6"
                    size={{ base: "xs", sm: "xs", md: "3xs" }}
                  >
                    Projets
                  </Heading>
                </Center>
              </Box>
            </Link>

            <SettingsMenu />
            
          </HStack>
        </Box>
      </Container>
    </Center>
  );
}