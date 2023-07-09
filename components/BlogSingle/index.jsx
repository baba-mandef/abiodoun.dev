import {
  Container,
  Heading,
  Grid,
  Image,
  Box,
  GridItem,
  Text,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
const moment = require("moment");

const baseUrl = "https://baba-mandef.onrender.com/api/v1/";

export default function BlogSingle({ post_id }) {

  const [post, setPost] = useState({});
  const fetchPostDetails = async () => {
    try {
      const response = await axios.get(baseUrl + "blog/post?slug=" + post_id);
      console.log(response.data);
      setPost(response.data[0]);
    } catch (e) {
      console.error("Error", e);
      throw e;
    }
  };
  const handleMarkup = (html) => {
    return { __html: html };
  };

  useEffect(() => {
    fetchPostDetails();
  }, []);

  return (
    <Center>
      <Container maxW={{ base: "3xl", md: "3xl", sm: "md" }} mt={"20px"}>
        <Center>
          <Grid>
            <GridItem>
              <Text
                textAlign={"center"}
                color={"#ff7624"}
                fontSize={{ base: "18px", md: "18px", lg: "18px", sm: "13px" }}
                fontWeight={"bold"}
              >
                 {moment(post.created_at).format('MMMM Do YYYY') }
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
              fontSize={{ base: "18px", md: "18px", lg: "18px", sm: "13px" }}
                as="div"
               
                textAlign={"justify"}
                dangerouslySetInnerHTML={handleMarkup(post.post)}
              ></Box>
            </GridItem>
          </Grid>
        </Center>
      </Container>
    </Center>
  );
}
