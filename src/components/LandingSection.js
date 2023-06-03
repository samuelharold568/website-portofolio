import React from "react";
import { Stack, Image, Button, Spacer, Avatar, Heading, VStack, Center, Box, Flex } from "@chakra-ui/react";
/* import { Button } from '@react-email/button'; */
import FullScreenSection from "./FullScreenSection";

const carousal = [
  {
    title: 'react router',
    getImageSrc: () => require("../images/react-router.png"),
  },
  {
    title: 'tailwind',
    getImageSrc: () => require("../images/tailwind.png"),
  },
  {
    title: 'chakra ui',
    getImageSrc: () => require("../images/chakra-ui.png"),
  },
  {
    title: 'css 3',
    getImageSrc: () => require("../images/css-3.png"),
  },
  {
    title: 'html 5',
    getImageSrc: () => require("../images/html-5.png"),
  },
  {
    title: 'javascript',
    getImageSrc: () => require("../images/js.png"),
  },
  {
    title: 'webpack',
    getImageSrc: () => require("../images/webpack.png"),
  },
  {
    title: 'react',
    getImageSrc: () => require("../images/react-js.png"),
  },
];

const getAvatar = require("../images/me.jpg")
const greeting = "Hello, I am Samuel!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => {
  const handleClick = () => () => {
    const email = 'samuelharold327@gmail.com';
    window.location.href = `mailto:${email}`;
  };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack spacing={10} w='100%'>
        <VStack >
          <Avatar size="2xl" src={getAvatar} />
          <Heading size="sm">{greeting}</Heading>
        </VStack>
        <VStack>
          <Heading>{bio1}</Heading>
          <Heading>{bio2}</Heading>
          <Spacer />
          <Button 
            onClick={handleClick}
            colorScheme='cyan' 
            variant='outline'>
              Send email
          </Button>
        </VStack> 
        <Stack className="slide" pos='relative' top={{base: '30px', md: '50px'}} w='100%' maxW='1100px' overflow='hidden'>
          <Stack w='100%' className="slide-track">
            <Flex gap='20px'>
              {carousal.map(item => (
                <Stack p='2px' bg='gray.500' h='70px' key={item.title}>
                  <Image h='100%' minW='140px' objectFit='contain' src={item.getImageSrc()} alt={item.title} />
                </Stack>
              ))}
            </Flex>
          </Stack>
        </Stack>
      </VStack>  
    </FullScreenSection>
  );
}

export default LandingSection;
