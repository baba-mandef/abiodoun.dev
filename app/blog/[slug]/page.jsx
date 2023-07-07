"use client";
import { Box, Center, Container, Grid, GridItem } from "@chakra-ui/react";
import Avatar from "@/app/components/Avatar";
import Name from "@/app/components/Name";
import BlogSingle from "@/app/components/BlogSingle";

export default function Blog({ params }) {
  return (
    <>
      <Center mx="5%" mb="80px" mt="20">
        <Grid>
          <GridItem>
            <Avatar />
          </GridItem>
          <GridItem>
            <Name />
          </GridItem>
          <GridItem>
            <BlogSingle post_id={params.slug} />
          </GridItem>
        </Grid>
      </Center>
    </>
  );
}
