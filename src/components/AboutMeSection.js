import React from "react";
import {
  Text,
  UnorderedList,
  ListItem,
  Heading, 
  Button,
  Image,
  Tooltip,
  Link,
  Box
} from "@chakra-ui/react";
import pdf from '../images/download-pdf.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const AboutMeSection = () => {
  const handleDownload = () => {
    const downloadUrl = process.env.PUBLIC_URL + '/assets/cv_samuel_frontend_developer.pdf';
    window.open(downloadUrl);
  };

  return (
    <article
    id="aboutme-section" 
    className="about"
    >
      <section>
        <Heading as='h3' mb={4} color='#FAF8F1'>Who is Samuel?</Heading>
        <Text color='#D6E4E5'>
        I am proud to be a frontend web developer, experienced in JavaScript and React JS. I am a lifelong learner and explore new technologies related to my role, and welcome any recommendations on challenging physical, mental, and emotional growth.
        </Text>
      </section>
      <section>
        <Heading as='h3' mb={4} color='#FAF8F1'>Experience</Heading>
        <Text color='#D6E4E5'>
        Front-end Developer with experience in JavaScript 	specialized in React JS. Seeking new opportunities to 	learn new technologies and challenges that will 	expand 	my skills. I have good knowledge in using of AJAX, 	Rest API, React Router v6,  module bundler, clean code, 	deploy 	with Netlify.
        </Text>
      </section>
      <section>
        <Heading as='h3' mb={4}  color='#FAF8F1'>Technical Expertise</Heading>
        <UnorderedList color='#D6E4E5'>
          <ListItem>JavaScript</ListItem>
          <ListItem>React JS</ListItem>
          <ListItem>React Router v6</ListItem>
          <ListItem>Chakra-UI</ListItem>
          <ListItem>Tailwind</ListItem>
          <ListItem>HTML5</ListItem>
          <ListItem>CSS3</ListItem>
          <ListItem>WebPack</ListItem>
        </UnorderedList>
      </section>
      <section>
        <Heading as='h3' mb={4} color='#FAF8F1'>Course</Heading>
        <UnorderedList spacing={2} color='#D6E4E5'>
          <ListItem>
            <Link href="https://www.dicoding.com/certificates/NVP792O3OZR0">Dicoding | Front-end Developer</Link>
            <Box as='span' ml='2' color='yellow.600' fontSize='sm'>
              <FontAwesomeIcon icon={faLink}/>
            </Box>
          </ListItem>
          <ListItem>
            <Link href="https://www.coursera.org/account/accomplishments/verify/754EP7DAE9K5">Meta | React Advanced Course</Link>
            <Box as='span' ml='2' color='yellow.600' fontSize='sm'>
              <FontAwesomeIcon icon={faLink}/>
            </Box>
          </ListItem>
          <ListItem>
            <Link href="https://www.codecademy.com/profiles/samuel721/certificates/5f85dd867b67b60014ac9ea3">Codecademy | Front-end Developer</Link>
            <Box as='span' ml='2' color='yellow.600' fontSize='sm'>
              <FontAwesomeIcon icon={faLink}/>
            </Box>
          </ListItem>
          <ListItem>
            <Link href="https://www.coursera.org/account/accomplishments/verify/V9QUJWBDWH6U">John Hopkins University | JavaScript for web Developer</Link>
            <Box as='span' ml='2' color='yellow.600' fontSize='sm'>
              <FontAwesomeIcon icon={faLink}/>
            </Box>
          </ListItem>
        </UnorderedList>
      </section>
      <Tooltip hasArrow label='Download Resume' bg='gray.300' color='black'>
      <Button
        onClick={handleDownload}
        pos='fixed'
        top='80%'
        left='70%'
        h='50px'
      >
        <Image h='50px' objectFit='contain' src={pdf} alt='download pdf' />
      </Button>
      </Tooltip>
    </article>
  )
};

export default AboutMeSection;