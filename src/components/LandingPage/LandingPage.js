import React from "react";
import LandingCss from "./LandingPage.module.css";
import { Link } from "react-scroll";
// import landingpageImg from "./Img/landingpageimg1.png";

import { BsChevronDoubleDown } from "react-icons/bs";

const landingPage = LandingCss.landingPage;
const landingContents = LandingCss.landingContents;
const landingpageimg = LandingCss.landingpageimg;
const Htext = LandingCss.Htext;
const landingTitle = LandingCss.landingTitle;
const wave = LandingCss.wave;
const landingParagraph = LandingCss.landingParagraph;
const arrowdownWrapper = LandingCss.arrowdownWrapper;

const text = "{ Frontend Engineer }";
const HtextClass = `landingHeading ${Htext}`;

const LandingPage = () => {
  return (
    <div className={landingPage} id="home">
       <div className={landingContents}>
        <div>
          {/* <img
            }
            src={landingpageImg}
            alt="Landing Img"
          /> */}
          <div className={landingpageimg}>

          </div>
          <h1 className={HtextClass}>
            Hi{" "}
            <span className={wave} role="img" aria-label="Wavy hand">
              👋
            </span>
            , I'm Mitchell Dennis
          </h1>
          <p className={landingTitle}>{text}</p>
        </div>
        <p className={landingParagraph}>
          I create responsive and scalable web software solutions to meet
          diverse client needs. With a focus on excellence. My expertise lies
          in developing user-friendly solutions that adapt to different
          devices. Passionate about Web3, Blockchain development and smart
          contracts.
        </p>
      </div>
      <Link
        to="about"
        id={arrowdownWrapper}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <BsChevronDoubleDown />
      </Link>
    </div>
  );
};

export default LandingPage;
