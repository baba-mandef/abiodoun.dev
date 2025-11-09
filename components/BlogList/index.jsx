import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Select,
  CardFooter,
  HStack,
  Button,
  Box,
  Center,
  Skeleton,
  SkeletonText,
  Heading,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://mandef.rezolusoft.com/api/v1/";

export default function BlogList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("latest");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const moment = require("moment");
  const toast = useToast();

  // Couleurs adaptatives
  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.7)', 'rgba(0, 10, 64, 0.5)');
  const buttonColor = useColorModeValue('rgb(255, 116, 36)', 'rgb(255, 116, 36)');
  const cardBorder = useColorModeValue(
    '1px solid rgba(255, 255, 255, 0.3)',
    '1px solid rgba(255, 255, 255, 0.1)'
  );
  const textColor = useColorModeValue('brand_second.500', 'whiteAlpha.900');
  const dateColor = useColorModeValue('brand.500', 'brand.200');

  const fetchCategories = async () => {
    try {
      const response = await axios.get(baseUrl + "blog/category");
      setCategories(response.data);
    } catch (e) {
      console.error("Error", e);
    }
  };

  const fetchLatest = async () => {
    try {
      const response = await axios.get(baseUrl + "blog/post");
      setPosts(response.data);
      setLoading(false);
      setLoaded(true);
    } catch (e) {
      console.error("Error", e);
      showErrorToast();
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        baseUrl + "blog/post?category=" + selectedCategory
      );
      setPosts(response.data);
      setLoading(false);
      setLoaded(true);
    } catch (e) {
      console.error("Error", e);
      showErrorToast();
    }
  };

  const showErrorToast = () => {
    toast({
      title: "Erreur",
      description: "Une erreur s'est produite lors du chargement des données",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSelect = (event) => {
    setSelectedCategory(event.target.value);
    setPosts([])
    setLoading(true);
    setLoaded(false);
  };

  useEffect(() => {
    fetchCategories();
    if (selectedCategory !== "latest") {
      fetchPosts();
    } else {
      fetchLatest();
    }
  }, [selectedCategory]);

  return (
    <Box>
      <Center>
        <HStack
          sx={{
            background: cardBg,
            backdropFilter: 'blur(10px)',
            borderRadius: 'lg',
            p: 3,
            mt: 5,
          }}
        >
          <Text>Catégorie :</Text>
          <Select
            variant="unstyled"
            value={selectedCategory}
            w="max-content"
            color="brand.500"
            onChange={handleSelect}
          >
            <option value="latest">récents</option>
            {categories.map((category) => (
              <option key={category.title} value={category.id}>
                {category.title}
              </option>
            ))}
          </Select>
        </HStack>
      </Center>

      <Center>
        <Box maxW={{ base: "7xl", md: "xl", lg: "7xl", sm: "sm" }} px={4}>
          {loading && (
            <Card
            w={{ base: "sm", lg: "sm", md: "xs", sm: "xs" }}
            my={"5"}
            mx={"5"}
              sx={{
                background: cardBg,
                backdropFilter: 'blur(10px)',
                border: cardBorder,
              }}
            >
              <Box p={6}>
                <Skeleton height="150px" />
                <SkeletonText mt={4} noOfLines={10} spacing={4} skeletonHeight={2} />
              </Box>
            </Card>
          )}

          <HStack 
            my={5} 
            spacing={0} 
            overflowX="auto"
            py={4}
            sx={{
              '&::-webkit-scrollbar': {
                height: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: useColorModeValue('brand.500', 'brand.500'),
                borderRadius: 'full',
              },
            }}
          >
            {posts.map((post) => (
              <Card
                key={post.id}
                w={{ base: "sm", lg: "sm", md: "xs", sm: "xs" }}
                mx={"2"}
                my={"5"}
                flexShrink={0}
                sx={{
                  background: cardBg,
                  backdropFilter: 'blur(10px)',
                  border: cardBorder,
                  boxShadow: 'lg',
                  transition: 'all 0.3s ease',
                  _hover: {
                    transform: 'translateY(-5px)',
                    boxShadow: 'xl',
                  },
                }}
              >
                <Link href={`/blog/${post.slug}`} passHref>
                  <CardBody>
                    <Image 
                      src={post.banner} 
                      alt="banner" 
                      borderRadius="lg"
                    
                    />
                    <Stack mt={4} spacing={3}>
                      <Heading 
                        as="h5" 
                        size="sm" 
                        color={textColor}
                        minH="50px"
                      >
                        {post.title.toUpperCase()}
                      </Heading>
                      <Text color={dateColor} fontWeight="bold">
                        {moment(post.created_at).format("Do MMMM YYYY")}
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button 
                      variant="solid" 
                      w="full" 
                      colorScheme="brand"
                      sx={{
                        backdropFilter: 'blur(10px)',
                        bg: buttonColor,
                      }}
                    >
                      Lire
                    </Button>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </HStack>
        </Box>
      </Center>
    </Box>
  );
}