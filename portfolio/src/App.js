import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component"
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import './App.css';
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

const  App =() => {
  return (
    <div style={{ position: "relative" }} >
       
       <MyCarousal />
       <MyTitleMessage />
       <MyNavbar />
       <Particles className="particles particles-box" params={particlesOptions}  /> 
       
       <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assests/img/background/react.jpg")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
    </div>
  );
}

export default App;
