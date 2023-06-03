import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";
import { Routes, Route, useSearchParams, useNavigate } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <main>
        <Routes>
          <Route path={'/'}
            element={
              <LandingSection />
            }
          />
          <Route path={'/project'}
            element={
              <ProjectsSection />
            }
          />
          <Route path={'/aboutme'}
            element={
              <AboutMeSection />
            }
          />
        </Routes>
      </main>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
