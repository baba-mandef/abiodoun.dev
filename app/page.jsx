"use client";
import { Box, Container, Center, Grid, GridItem } from "@chakra-ui/react";
import Avatar from "./components/Avatar";
import Name from "./components/Name";
import HomeDesc from "./components/descpription/HomeDesc";
import HomeBio from "./components/bio/HomeBio";
import Stack from "./components/Stack";

export default function Home() {
  return (
    <>
      <Center>
        <Container maxW="3xl" mt="20">
          <Grid>
            <GridItem>
              <Avatar />
            </GridItem>
            <GridItem>
              <Name />
            </GridItem>
            <GridItem>
              <HomeDesc />
            </GridItem>
            <GridItem>
              <HomeBio />
            </GridItem>
            <GridItem>
              <Stack />
            </GridItem>
          </Grid>
        </Container>
      </Center>
    </>
  );
}
