import React from "react";
import LandingCss from './LandingPage.module.css';
import { BsChevronDoubleDown } from "react-icons/bs";

const landingPage = LandingCss.landingPage
const landingContents = LandingCss.landingContents

const landingHeading = LandingCss.landingHeading
const landingParagraph = LandingCss.landingParagraph
const socials = LandingCss.socials
const social = LandingCss.social
const arrowdown = LandingCss.arrowdown

const name = "{ Hi, I'm Mitchyugan }"
const text = "<> I'm a Frontend developer </>"


const LandingPage = () =>{
    return(
        <div className={landingPage}>
            <div className={landingContents}>
                    <h1 className={landingHeading}>{name}</h1>
                    <p className={landingParagraph}>
                        {text}
                    </p>
            </div>
            <BsChevronDoubleDown className={arrowdown}/>

            <div className={socials}>
                <div className={social}>
                    <a href="https://www.linkedin.com/in/mitchell-dennis-144005247/" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="Ram Maheshwari Linkedin Profile" />
                    </a>
                </div>
                <div className={social}>
                    <a href="https://twitter.com/rammcodes"  rel="noreferrer" target="_blank">
                    <img src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg" alt="RammCodes Twitter Profile" />
                    </a>
                </div>
                <div className={social}>
                    <a href="https://github.com/rammcodes"  rel="noreferrer" target="_blank">
                    <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="RammCodes Github Profile" />
                    </a>
                </div>

                <div className={social}>
                    <a href="https://dev.to/rammcodes"  rel="noreferrer" target="_blank">
                    <img src="https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg" alt="RammCodes DEV.to Blog Profile" />
                    </a>
                </div>
                </div>
            </div>
    )
}

export default LandingPage