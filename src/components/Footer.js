import React from "react";
import BottomNavigation from "./BottomNavigation";
import { useMediaQuery, Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  const [isSmallThan768] = useMediaQuery('(max-width: 768px)')

  const footer = (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Samuel • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );

  return isSmallThan768 ? <BottomNavigation /> : footer;
};
export default Footer;
