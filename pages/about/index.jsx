"use client";
import { Box, Container, Center, Grid, GridItem } from "@chakra-ui/react";
import Avatar from "@/components/Avatar";
import Name from "@/components/Name";
import AboutDesc from "@/components/descpription/AboutDesc";
import AboutBio from "@/components/bio/AboutBio";
import AboutStack from "@/components/AboutStack";

export default function About() {
  return (
    <>
      <Center>
        <Container maxW="3xl" mb="80px" mt="20">
          <Grid>
            <GridItem>
              <Avatar />
            </GridItem>
            <GridItem>
              <Name />
            </GridItem>
            <GridItem>
              <AboutDesc />
            </GridItem>

            <GridItem>
              <AboutBio />
            </GridItem>
            <GridItem>
              <AboutStack />
            </GridItem>
          </Grid>
        </Container>
      </Center>
    </>
  );
}
