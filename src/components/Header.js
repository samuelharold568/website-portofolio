import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Center } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const socials = [
  {
    icon: faInstagram,
    url: 'https://www.instagram.com/harld568/'
  },
  {
    icon: faGithub,
    url: 'https://github.com/samuelharold568'
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/samuel-harold-wiradhika-073ba31a3/'
  },
  {
    icon: faDev,
    url: 'https://dev.to/samuelharold'
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com/'
  }
]

const Header = () => {
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
      position="fixed"
      className="header"
      top={0}
      left={0}
      right={0}
      transform={prevScroll < scrollPosition ? 'translateY(-200px)' : 'translateY(0)'}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav
            className="nav-social-link"
          >
            <HStack spacing={8}>
            {socials.map((item, index) => {
              return (
                <a 
                key={index}
                href={item.url} ><FontAwesomeIcon icon={item.icon} size="2x" /></a>
              )
            })}
            </HStack>
          </nav>
          <nav 
            className="nav-route-page"
          >
            <HStack spacing={8}>
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/aboutme">ABOUT</NavLink>
              <NavLink to="/project">PROJECTS</NavLink>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
