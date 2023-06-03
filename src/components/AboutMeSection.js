import React from "react";
import {
  Text,
  UnorderedList,
  ListItem,
  Heading, 
  Button,
  Image,
  Tooltip
} from "@chakra-ui/react";
import pdf from '../images/download-pdf.png';

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
        <UnorderedList  color='#D6E4E5'>
          <ListItem>Dicoding | Front-end Developer</ListItem>
          <ListItem>Meta | React Advanced Course</ListItem>
          <ListItem>Codecademy | Front-end Developer</ListItem>
          <ListItem>John Hopkins University | JavaScript for web Developer</ListItem>
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