import React from "react";
import LandingCss from './LandingPage.module.css';
import { Link } from "react-scroll"
import { BsChevronDoubleDown } from "react-icons/bs";

const landingPage = LandingCss.landingPage
const landingContents = LandingCss.landingContents
const Htext = LandingCss.Htext
const wave = LandingCss.wave
const landingParagraph = LandingCss.landingParagraph
const arrowdownWrapper = LandingCss.arrowdownWrapper

const text = "<> I'm a Frontend developer with 1 year+ experience </>"
const HtextClass = `landingHeading ${Htext}`


const LandingPage = () =>{
    return(
        <div className={landingPage} id="home">
            <div className={landingContents}>
                    <h1 className={HtextClass}>Hi <span className={wave} role="img" aria-label="Wavy hand">👋</span>, I'm Mitchyugan</h1>
                    <p className={landingParagraph}>
                        {text}
                    </p>
                
            </div>
            <Link to="about" id={arrowdownWrapper} spy={true} smooth={true} offset={50} duration={500}>
                <BsChevronDoubleDown/>
            </Link>
        </div>
    )
}

export default LandingPage