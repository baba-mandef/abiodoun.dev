/* eslint-disable react/no-unescaped-entities */
import { Box, Center, Text } from "@chakra-ui/react";

export default function AboutBio() {
  return (
    <Center>
      <Box>
        <Text align="justify" fontSize="16" my="10" mb="5" p="2">
          Greetings ! I'm{" "}
          <Box color="#ff7624" as="span">
            Abiodoun Paraïso
          </Box>
          , a software engineer with a passion for programming, UI/UX design,
          and electronics. I craft robust and ergonomic systems to tackle
          everyday challenges. With a focus on problem-solving, I thrive on
          creating solutions that enhance people's lives. Usually, you'll find
          me working and crafting things with computers and electronic
          components, playing FPS video games, painting with pastels, creating
          content on tech, African culture/history, and making money with
          synthetic index trading. Let's connect and dive into the exciting
          world of technology and beyond!
        </Text>
      </Box>
    </Center>
  );
}
