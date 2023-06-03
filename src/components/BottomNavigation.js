import React, { useState, useEffect } from "react";
import { Flex, Box, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const BottomNavigation = () => {
  const [prevScroll, setPrevScroll] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setPrevScroll(scrollPosition);
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition])

  return (
    <Box
      className="header bottom"
      position="fixed"
      transform={prevScroll < scrollPosition ? 'translateY(200px)' : 'translateY(0)'}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
     >
      <div>
        <Flex
          margin="0 auto"
          px={13}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <nav>
            <HStack spacing={16}>
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/aboutme">ABOUT</NavLink>
              <NavLink to="/project">PROJECTS</NavLink>
            </HStack>
          </nav>
        </Flex>
      </div>
    </Box>
  );
};
export default BottomNavigation;