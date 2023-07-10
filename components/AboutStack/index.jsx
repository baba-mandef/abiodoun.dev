import { Box, Center, Text, Link } from "@chakra-ui/react";

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
          <Text
            fontSize={{ base: "18px", md: "18px", lg: "18px", sm: "15px" }}
            fontWeight={"bold"}
          >
            Contacts = [ <Link href='https://twitter.com/ptahemdjehuty' isExternal>Twitter</Link>{" "}
            <Box color="#ff7624" as="span">
            <Link href='https://github.com/ptahemdjehuty' isExternal>- Github -</Link>
            </Box>{" "}
            <Link href='https://t.me/ptahemdjehuty' isExternal>Telegram</Link> ]
          </Text>
        </Box>
      </Center>
    </>
  );
}
