import { Box, Center, Heading, Link } from "@chakra-ui/react";

export default function Stack() {
  return (
    <>
      {/*  <Grid templateColumns="repeat(3, 1fr)" pt="10px" mx="10">
        <Center>
          <GridItem>
            <Box boxSize="50">
              <Image src="img/twitter.png" alt="javascript"></Image>
            </Box>
          </GridItem>
        </Center>
        <Center>
          <GridItem>
            <Box boxSize="50">
              <Image src="img/github.png" alt="react"></Image>
            </Box>
          </GridItem>
        </Center>

        <Center>
          <GridItem>
            <Box boxSize="50">
              <Image src="img/telegram.png" alt="docker"></Image>
            </Box>
          </GridItem>
        </Center>
      </Grid> */}

      <Center>
        <Box>
          <Heading
           color={"brandark.500"}
           as={"h4"}
           size={"md"}
          >
            [ <Link href='https://twitter.com/baba_mandef' isExternal>Twitter</Link>{" "}
            <Box color="brand.500" as="span">
            <Link href='https://github.com/baba-mandef' isExternal>- Github -</Link>
            </Box>{" "}
            <Link href='https://t.me/baba_mandef' isExternal>Telegram</Link> ]
          </Heading>
        </Box>
      </Center>
    </>
  );
}
