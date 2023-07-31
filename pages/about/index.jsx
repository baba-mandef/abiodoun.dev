"use client";
import {
  Container,
  Center,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Logo from "@/components/Logo";
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
              <Logo />
            </GridItem>
            <GridItem>
              <Name />
            </GridItem>
            <GridItem>
              <AboutDesc />
            </GridItem>

            <GridItem>
              <Tabs colorScheme="black" color={"brand.500"} mt={"30px"}>
               <Center>
               <TabList>
                  <Tab>A propos</Tab>
                  <Tab>Outils</Tab>
                  <Tab>Parcours</Tab>
                </TabList>
               </Center>

                <TabPanels>
                  <TabPanel>
                    <AboutBio />
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </GridItem>
          </Grid>
        </Container>
      </Center>
    </>
  );
}
