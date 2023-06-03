import { Heading, HStack, Image, Text, VStack, Box, Link, Flex, Badge } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, visitApp, viewCode, newTab, color, level }) => {

  return (
    <HStack>
      <VStack>
        <Box backgroundColor='#FCFFE7' maxW='md' maxH={{base:'auto', md:'auto', lg:'lg'}} borderWidth='1px' borderRadius='lg'>
          <Image objectFit='cover' w='100%' h='300px' borderRadius='lg' src={imageSrc} alt={title} />
          <Box p='6'>
            <Box display='flex' justifyContent='start'>
              <Heading
                textAlign='left'
                color='#2C3639'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='lg'
              >
                {title}
                <Badge ml='1' colorScheme={color}>
                  {level}
                </Badge>
              </Heading>
            </Box>
            <Box
              h='20%'
              mt='1'
              as='h4'
              lineHeight='tight'
            >
              <Text fontSize="sm" color='#AAAAAA'>{description}</Text>
            </Box>
            <Flex justify='space-between' mt='2' alignItems='center'>
              <Box>
                <Link fontSize='sm' color='teal.500' href={visitApp} target={newTab}>Visit App</Link>
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  <FontAwesomeIcon icon={faExternalLink}/>
                </Box>
              </Box>
              <Box>
                <Link fontSize='sm' color='teal.500' href={viewCode} target={newTab}>View Code</Link>
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  <FontAwesomeIcon icon={faExternalLink}/>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </VStack>
    </HStack>
  )
};

export default Card;
