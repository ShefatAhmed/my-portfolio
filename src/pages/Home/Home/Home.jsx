import { Element } from "react-scroll";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
const Home = () => {
  return (
    <div>
      <Element name="banner">
        <Banner></Banner>
      </Element>
      <Element name="education">
        <Education></Education>
      </Element>
      <Element name="skills">
        <Skills></Skills>
      </Element>
      <Element name="projects">
        <Projects></Projects>
      </Element>
      <Element name="about">
        <About></About>
      </Element>
    </div>
  );
};

export default Home;
