"use client";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import Logo from "@/components/Logo";
import Name from "@/components/Name";
import BlogList from "@/components/BlogList";
export default function Blog() {
  return (
    <>
      <Center  mb="80px" mt="20">
        
          <Grid>
            <GridItem>
              <Logo />
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
