import React from "react";
import LandingCss from './LandingPage.module.css';
import { BsChevronDoubleDown } from "react-icons/bs";

const landingPage = LandingCss.landingPage
const landingContents = LandingCss.landingContents
const landingHeading = LandingCss.landingHeading
const Htext = LandingCss.Htext
const landingParagraph = LandingCss.landingParagraph
const socials = LandingCss.socials
const social = LandingCss.social
const arrowdown = LandingCss.arrowdown
// const svg = LandingCss.svg

const name = "{ Hi 👋, I'm Mitchyugan }"
const text = "<> I'm a Frontend developer </>"
const HtextClass = `landingHeading ${Htext}`


const LandingPage = () =>{
    return(
        <div className={landingPage}>
            <div className={landingContents}>
                    <h1 className={landingHeading}>{name}</h1>
                    <h1 className={HtextClass}>Hi 👋, I'm Mitchyugan</h1>
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
                    <a href="https://twitter.com/Mitchyugan"  rel="noreferrer" target="_blank">
                    <img src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg" alt="RammCodes Twitter Profile" />
                    </a>
                </div>
                <div className={social}>
                    <a href="https://github.com/MITCHYUGAN/"  rel="noreferrer" target="_blank">
                    <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="RammCodes Github Profile" />
                    </a>
                </div>

                <div className={social}>
                    <a href="https://dev.to/rammcodes"  rel="noreferrer" target="_blank">
                    <img src="https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg" alt="RammCodes DEV.to Blog Profile" />
                    </a>
                </div>
                </div>
                {/* <svg  className={svg} viewBox="0 0 1194 1192" fill="none" xmlns="http://www.w3.org/2000/svg" class="__web-inspector-hide-shortcut__"><g opacity="0.2" ><circle cx="596" cy="596" r="594.5" stroke="url(#paint0_linear_1147_785)" stroke-width="3"></circle><circle cx="64" cy="335" r="10" fill="url(#paint1_linear_1147_785)"></circle><circle cx="187" cy="1029" r="10" fill="url(#paint2_linear_1147_785)"></circle><circle cx="1184" cy="684" r="10" fill="url(#paint3_linear_1147_785)"></circle></g><defs><linearGradient id="paint0_linear_1147_785" x1="27.8649" y1="603.544" x2="1201.29" y2="603.544" gradientUnits="userSpaceOnUse"><stop stop-color="#4CA5FF"></stop><stop offset="1" stop-color="#B673F8"></stop></linearGradient><linearGradient id="paint1_linear_1147_785" x1="54.4675" y1="335.127" x2="74.1558" y2="335.127" gradientUnits="userSpaceOnUse"><stop stop-color="#4CA5FF"></stop><stop offset="1" stop-color="#B673F8"></stop></linearGradient><linearGradient id="paint2_linear_1147_785" x1="177.468" y1="1029.13" x2="197.156" y2="1029.13" gradientUnits="userSpaceOnUse"><stop stop-color="#4CA5FF"></stop><stop offset="1" stop-color="#B673F8"></stop></linearGradient><linearGradient id="paint3_linear_1147_785" x1="1174.47" y1="684.127" x2="1194.16" y2="684.127" gradientUnits="userSpaceOnUse"><stop stop-color="#4CA5FF"></stop><stop offset="1" stop-color="#B673F8"></stop></linearGradient></defs></svg> */}
            </div>
    )
}

export default LandingPage