import React from "react";
import FullScreenSection from "./FullScreenSection";
import { SimpleGrid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon",
    description:
      "Little Lemon is a restaurant website that showcases restaurant menu information. In the creation of this website, React library and Chakra-UI framework were used to build its interface, React Router for page routing, and Leaflet.js for creating location maps.",
      getImageSrc: () => require("../images/photo01.jpg"),
      visitApp: "https://little-lemon-568.netlify.app/",
      viewCode: "https://github.com/samuelharold568/little-lemon",
      newTab: "_blank",
      level: "INTERMEDIATE",
      color: "green",
  },
  {
    title: "Nasumo",
    description:
      "Nasumo is a restaurant catalog website that showcases restaurants from various regions in Indonesia and provides menu information. The development of this website utilizes pure JavaScript programming language and a service worker that monitors data in the cache, allowing the website to resemble a native application",
    getImageSrc: () => require("../images/photo02.jpg"),
    visitApp: "https://nasumo.netlify.app/",
    viewCode: "https://github.com/samuelharold568/catalog-restaurant",
    newTab: "_blank",
    level: "BEGINNER",
    color: "blue"
  },
  {
    title: "Notes App",
    description:
      "The Notes App is a web-based application that functions to write and save notes. I created this project to test my understanding in using React router, state, react hooks, and fetching data from a REST API. It was built using React.js and React Router technologies",
    getImageSrc: () => require("../images/photo03.jpg"),
    visitApp: "#",
    viewCode: "#",
    level: "BEGINNER",
    color: "blue"
  },
  {
    title: "Rating GitHub Apps",
    description:
      "The rating of GitHub apps is still under development and will eventually have features such as sorting and filtering reviewed repositories, user registration, login, and creating reviews for repositories. This project uses React Native, GraphQL, and Redux.",
    getImageSrc: () => require("../images/photo4.jpg"),
    visitApp: "#",
    viewCode: "#",
    level: "ADVANCED",
    color: "red"
  },
];

const ProjectsSection = () => {

  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="center"
      spacing={10}
      marginTop="70px"
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <SimpleGrid
        columns={[1, null, 2]}
        gridGap={8}
      >
        {projects.map((project) => (
          <motion.div key={project.title} initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            visitApp={project.visitApp}
            viewCode={project.viewCode}
            newTab={project.newTab}
            level={project.level}
            color={project.color}
          /></motion.div>
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
