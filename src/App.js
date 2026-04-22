import hand from "./resources/images/hand.png";
import pic from "./resources/images/Vinay.png";
import YoutubeDl from "./resources/images/YoutubeDl.png";
import webRTC from "./resources/images/webRTC.png";
import logoLMS from "./resources/images/logoLMS.png";
import "./styles.css";
import "./App.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
AOS.init();
function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [darkMode, setDarkMode] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);
  let toggleScroll = function () {
    if (window.scrollY > 200) setScrollVisible(true);
    else setScrollVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);
    const d = new Date();
    const hours = d.getHours();
    const night = hours >= 18 || hours < 6;
    if (night) setDarkMode(true);
    else setDarkMode(false);
  }, []);
  useEffect(() => {
    if (darkMode && !window.document.body.classList.contains("darkMode")) {
      if (window.document.body.classList.contains("inverse-dark"))
        window.document.body.classList.remove("inverse-dark");
      window.document.body.classList.add("darkMode");
    } else if (
      !darkMode &&
      !window.document.body.classList.contains("inverse-dark")
    ) {
      if (window.document.body.classList.contains("darkMode"))
        window.document.body.classList.remove("darkMode");
      window.document.body.classList.add("inverse-dark");
    }
  }, [darkMode]);
  let toggleDarkMode = function () {
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      {scrollVisible ? (
        <button
          className={
            darkMode
              ? "ScrollToTop btn btn-primary"
              : "ScrollToTop btn btn-secondary"
          }
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      ) : (
        ""
      )}
      <label className="switch">
        <div className="sun"></div>
        <div className="moon"></div>
        <input
          id="mode-switch"
          onClick={toggleDarkMode}
          type="checkbox"
          checked={darkMode}
        />
        <span className="slider round"></span>
      </label>
      <header className={darkMode ? "Header " : "Header inverse-dark "}>
        <h1>
          Hi! <img src={hand} height="100" className="handWave"></img>
        </h1>
        <h1>
          I'm <span className="Name">Vinay Chaturvedi</span>
        </h1>
        <h4>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.start();
            }}
            options={{
              strings: [
                "Full Stack Web Developer...",
                "Node Enthusiast...",
                "MERN Specialist...",
                "This is my Portfolio!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
      </header>
      <div
        className={
          darkMode
            ? "s2 mt-5 row offset-2 About"
            : "s2 mt-5 row offset-2 About inverse-dark"
        }
        data-aos="fade-up"
        data-aos-delay="90"
      >
        <h4 className="text-left SectionTitle2">ABOUT</h4>
        <section className="mt-2 mb-4 col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 Intro">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-9">
              I am a Full Stack Web Developer proficient in the MERN stack. I
              like to develop applications to better{" "}
              <b>
                <i>productivity</i>
              </b>{" "}
              and{" "}
              <b>
                <i>experience</i>
              </b>{" "}
              of users.{" "}
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
              <img src={pic} className="pic" alt="logo" />
            </div>
          </div>
          <hr />
          My academic activities include researching on the P=NP? Complexity
          problem and learning new technologies. I am also aware of concepts of
          Artificial Intelligence and Machine Learning.
          <br />
          <b>
            I am a proud student of{" "}
            <a href="https://www.guvi.in/vcvcchaturvedi01" target="_blank">
              GUVI
            </a>
            's <i>Zen</i> class
          </b>
          <br />
          <br />
          <hr />
          <i>Curriculum Vitae - </i>
          <a
            className="highLightOnHover"
            href="https://drive.google.com/file/d/1DPUDUMtQ7WkPm9vtqcTCN6ZFhDWE4XoQ/view?usp=sharing"
            target="_blank"
          >
            Vinay Chaturvedi
          </a>
          &emsp;
          <i>Contact Me - </i>
          <a
            href="mailto:vcvcchaturvedi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </section>
      </div>
      <div
        className="s2 mt-5 pb-5 row offset-2"
        data-aos="fade-up"
        data-aos-delay="70"
      >
        <h4 className="text-left SectionTitle">SKILLS</h4>
        <div className="SectionDescription">
          <h5>
            I am equipped with the Full Stack Developer skills relevant to the
            following:
          </h5>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
              <div>
                <b>LANGUAGES</b>
              </div>

              <div>Javascript</div>
              <div>Python</div>
              <div>C#</div>
              <div>HTML</div>
              <div>CSS</div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
              <div>
                <b>FRAMEWORKS</b>
              </div>

              <div>React</div>
              <div>Node</div>
              <div>Express</div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
              <div>
                <b>DATABASES</b>
              </div>

              <div>MongoDB</div>
              <div>MySQL</div>
              <div>SQL Server</div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
              <div>
                <b>TOOLS</b>
              </div>

              <div>VSCode</div>
              <div>Git and GitHub</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="s2 mt-5 row offset-2"
        data-aos="fade-up"
        data-aos-delay="90"
      >
        <h4 className="text-left SectionTitle">PROJECTS</h4>
        <div className="SectionDescription">
          <div className="row mt-5">
            <img className="project-image" src={logoLMS} alt="Project Image" />
            <h5>Learning Management System</h5>
            <p>
              Students and Instructors can leverage this open source platform
              for academics, <b>GitHub - </b>
              <a href="https://github.com/vcvcchaturvedi/lms" target="_blank">
                Frontend
              </a>
              <a
                href="https://github.com/vcvcchaturvedi/lms-backend"
                className="margina"
                target="_blank"
              >
                Backend
              </a>
            </p>
            <div className="row">
              <div className="tech-used col-1 col-sm-1 col-md-1 offset-1 offset-md-0 offset-lg-0 offset-xl-0">
                React
              </div>
              <div className="tech-used col-1 col-sm-1 col-md-1 offset-1">
                MongoDB
              </div>
              <div className="tech-used col-1 col-sm-1 col-md-1 offset-1">
                Express
              </div>
              <div className="tech-used col-1 col-sm-1 col-md-1 offset-1">
                PassportJS
              </div>
              <div className="tech-used col-1 col-sm-1 col-md-1 offset-1">
                Node
              </div>
              <span className="mt-4">
                <a href="https://learnonline.netlify.app/" target="_blank">
                  <b>Live URL</b>
                </a>
              </span>
            </div>
          </div>
          <div className="row mt-5">
            <img
              className="project-image"
              src={YoutubeDl}
              alt="Project Image"
            />
            <h5>YouTube Downloader</h5>
            <p>
              Download your favourite YouTube videos in desired audio/video
              formats merged as one, <b>GitHub - </b>
              <a
                href="https://github.com/vcvcchaturvedi/youtube-downloader"
                target="_blank"
              >
                Frontend
              </a>
              <a
                href="https://github.com/vcvcchaturvedi/youtube-downloader-be"
                className="margina"
                target="_blank"
              >
                Backend
              </a>
            </p>
            <div className="row">
              <div className="tech-used col-1 offset-1 offset-md-0 offset-lg-0 offset-xl-0">
                React
              </div>
              <div className="tech-used col-1 offset-1">Express</div>
              <div className="tech-used col-1 offset-1">Node</div>
              <span className="col-12 mt-4">
                <a
                  href="https://youtube-downloader-vinay.netlify.app"
                  target="_blank"
                >
                  <b>Live URL</b>
                </a>
              </span>
            </div>
          </div>
          <div className="row mt-5">
            <img className="project-image" src={webRTC} alt="Project Image" />
            <h5>Video Conferencing</h5>
            <p>
              Audio/Video with Chat Conferencing solution based on WebRTC,{" "}
              <b>GitHub - </b>
              <a
                href="https://github.com/vcvcchaturvedi/coordinate-at-work"
                target="_blank"
              >
                Frontend
              </a>
              <a
                href="https://github.com/vcvcchaturvedi/coordinate-at-office-backend"
                className="margina"
                target="_blank"
              >
                Backend
              </a>
            </p>
            <div className="row">
              <div className="tech-used col-1 offset-1 offset-md-0 offset-lg-0 offset-xl-0">
                React
              </div>
              <div className="tech-used col-1 offset-1">Express</div>
              <div className="tech-used col-1 offset-1">Node</div>
              <div className="tech-used col-1 offset-1">WebRTC</div>
              <span className="col-12 mt-4">
                <a
                  href="https://coordinate-at-work.netlify.app/"
                  target="_blank"
                >
                  <b>Live URL</b>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="s2 mt-5 mb-2 row offset-2"
        data-aos="fade-up"
        data-aos-delay="70"
      >
        <h4 className="text-left SectionTitle">RESEARCH</h4>
        <div className="SectionDescription">
          <p className="col-11 col-sm-10 col-md-9 col-lg-9 col-xl-9">
            I love researching on the NP Complete Problems like Sudoku, 3SAT,
            Hamiltonian Cycle and Subset Sum problem and have developed quite a
            few heuristics on few of those problems.{" "}
            <a
              href="https://independent.academia.edu/VinayChaturvedi4"
              target="_blank"
            >
              <b>Link to research</b>
            </a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-1">Vinay Chaturvedi, 2021</div>
        <div className="col-4 offset-1 col-sm-4 col-md-3 col-lg-3 col-xl-3 offset-sm-1 offset-md-2 offset-lg-2 offset-xl-2">
          <a
            href="https://github.com/vcvcchaturvedi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            className="margina"
            href="https://www.linkedin.com/in/vinay-chaturvedi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
      {/* <span className="footer-left">Vinay Chaturvedi, 2021</span>
      <span className="footer-right">
        <a
          href="https://github.com/vcvcchaturvedi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a
          className="margina"
          href="https://www.linkedin.com/in/vinay-chaturvedi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
      </span> */}
    </div>
  );
}

export default App;
