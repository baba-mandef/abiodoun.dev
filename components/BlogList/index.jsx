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
  VStack,
  Center,
  Skeleton,
  SkeletonText,
  Hide,
  Heading,
  Divider,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://api.abiodoun.dev/api/v1/";
export default function BlogList(/* img_source, title */) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("latest");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const moment = require("moment");
  const toast = useToast();

  const fechtCategories = async () => {
    try {
      const response = await axios.get(baseUrl + "blog/category");
      console.log(response.data);
      setCategories(response.data);
    } catch (e) {
      console.error("Error", e);
    }
  };

  const fetchLatest = async () => {
    try {
      const response = await axios.get(baseUrl + "blog/post");
      console.log(response.data);
      setPosts(response.data);
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
  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        baseUrl + "blog/post?category=" + selectedCategory
      );
      console.log(response.data);
      setPosts(response.data);
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
  const hanndleSelect = (event) => {
    setSelectedCategory(event.target.value);
    setLoading(true);
    setLoaded(false);
    console.log("Selected", event.target.value);
  };

  useEffect(() => {
    fechtCategories();
    if (selectedCategory != "latest") {
      fetchPosts();
    } else {
      fetchLatest();
    }
  }, [selectedCategory]);

  return (
    <>
      <Center>
        <Select
          mt={"20px"}
          variant={"unstyled"}
          value={selectedCategory}
          w={"max-content"}
          color={"brand.500"}
          onChange={hanndleSelect}
        >
          <option value="latest">récents</option>
          {categories.map((category) => (
            <option key={category.title} value={category.id}>
              {category.title}
            </option>
          ))}
        </Select>
      </Center>
      <Center>
       
       
          <Box maxW={{ base: "7xl", md: "xl", lg: "7xl", sm: "sm" }}>
          <Card hidden={loaded} w={{base:"sm", lg:"sm", md:"xs", sm:"xs"}} my={"5"} mx={"5"}>
          <Box padding="6">
            <Skeleton height="150px" />
            <SkeletonText
              mt="4"
              noOfLines={10}
              spacing="4"
              skeletonHeight="2"
            />
          </Box>
        </Card>
            <HStack mx={"7px"} my={"20px"} overflowX="auto" >
              {posts.map((post) => (
                <Card
                  w={{base:"sm", lg:"sm", md:"xs", sm:"xs"}}
                  key={post.id}
                  flexShrink="0"
                  my={"5"}
                  mx={"5"}
                  boxShadow={"md"}
                >
                  <Link
                    color={"brand.500"}
                    href={"/blog/[slug]"}
                    as={`/blog/${post.slug}`}
                  >
                    <CardBody>
                      <Image src={post.banner} alt="banner" borderRadius="lg" />
                      <Stack mt="10" spacing="3">
                        <Heading as={"h5"} size="sm" color={"brandark.500"}>
                          {post.title.toUpperCase()}
                        </Heading>
                        <Box as={"p"} color={"brand.500"} fontWeight={"bold"}>
                          {moment(post.created_at).format("Do MMMM YYYY")}
                        </Box>
                      </Stack>
                    </CardBody>

                    <CardFooter>
                      <Button variant={"solid"} w={"lg"} colorScheme="brand">
                        Lire
                      </Button>
                    </CardFooter>
                  </Link>
                </Card>
              ))}
            </HStack>
          </Box>
      
      </Center>
    </>
  );
}
