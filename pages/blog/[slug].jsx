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
} from "@chakra-ui/react";
import Logo from "@/components/Logo";
import Name from "@/components/Name";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
const moment = require("moment");

const baseUrl = "https://baba-mandef.onrender.com/api/v1/";

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const fetchPostDetails = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}blog/post?slug=${router.query.slug}`
      );
      console.log(response.data);
      setPost(response.data[0]);
      try {
        const response = await axios.get(
          `${baseUrl}blog/comment?post=${router.query.slug}`
        );
        console.log(response.data);
        setComments(response.data);
        setLoading(false);
        setLoaded(true);
      } catch (e) {
        console.error("Error", e);
        throw e;
      }
    } catch (e) {
      console.error("Error", e);
      throw e;
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

  return (
    <>
      <Center mx="5%" mb="80px" mt="20">
        <Grid>
          <GridItem>
            <Logo />
          </GridItem>
          <GridItem>
            <Name />
          </GridItem>
          <GridItem hidden={loaded}>
            <Box padding="6" w={{ base: "3xl", md: "lg", lg: "3xl", sm: "sm" }}>
              Loading ....
              <Skeleton height="250px" />
              <SkeletonText
                mt="4"
                noOfLines={10}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          </GridItem>
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
                        color={"#ff7624"}
                        fontSize={{
                          base: "18px",
                          md: "18px",
                          lg: "18px",
                          sm: "13px",
                        }}
                        fontWeight={"bold"}
                      >
                        {moment(post.created_at).format("MMMM Do YYYY")}
                      </Text>
                    </GridItem>
                    <GridItem mt={"30px"}>
                      <Heading textAlign={"center"}>{post.title}</Heading>
                    </GridItem>
                    <GridItem mt={"20px"}>
                      <Image src={post.banner} alt="banner" borderRadius="lg" />
                    </GridItem>
                    <GridItem mt={"30px"}>
                      <Box
                        fontSize={{
                          base: "16px",
                          md: "16px",
                          lg: "16px",
                          sm: "13px",
                        }}
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
                      <Heading
                        as="h3"
                        textAlign={"center"}
                        size="lg"
                        mb={"10px"}
                      >
                        Comments
                      </Heading>

                      <Divider bg="black" w="100%" h="1px" mb={"30px"} />

                      {comments.map((comment) => (
                        <HStack key={comment.id} mb={"30px"}>
                          <Box alignSelf={"start"}>
                            <Avatar
                              name={comment.author_name}
                              /* O */
                            ></Avatar>
                          </Box>
                          <Box
                            /*  border={"1px"} */
                            p={"10px"}
                            borderRadius={"10px"}
                            w={"100%"}
                            bgColor={"#e6e6e6"}
                          >
                            <Heading
                              textColor={"#ff7624"}
                              as="h4"
                              size="md"
                              fontWeight={"bold"}
                              pb={"5px"}
                            >
                              {comment.author_name}
                            </Heading>

                            <Text>{comment.body}</Text>
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
