"use client";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import Avatar from "@/components/Avatar";
import Name from "@/components/Name";
import BlogList from "@/components/BlogList";
export default function Blog() {
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
              <BlogList/>
            </GridItem>
          </Grid>
    
      </Center>
    </>
  );
}
