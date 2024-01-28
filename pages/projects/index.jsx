"use client";
import { Center, Grid, GridItem,} from "@chakra-ui/react";
import Logo from "@/components/Logo";
import Name from "@/components/Name";
import ProjectDesc from "@/components/descpription/ProjectDesc";
import ProjectList from "@/components/ProjectList";

export default function Project() {
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
             <ProjectDesc />
            </GridItem>
            <GridItem pt={"50px"}>
             <ProjectList />
            </GridItem>
          </Grid>
    
      </Center>
    </>
  );
}
