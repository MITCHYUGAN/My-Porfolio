import { useState } from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-scroll"
import React from 'react'
import logo from './Img/logo.svg'
import HeaderCss from './Header.module.css'
import { RiMenu3Fill } from "react-icons/ri";

const headerWrapper = HeaderCss.headerWrapper
const header = HeaderCss.header
const Logo = HeaderCss.Logo
const nav = HeaderCss.nav
const lists = HeaderCss.lists
const headerButtons = HeaderCss.headerButtons
const resumeBtn = HeaderCss.resumeBtn
const socials = HeaderCss.socials
const social = HeaderCss.social


const headerButtonsMobile = HeaderCss.headerButtonsMobile
const ToggleNavBtn = HeaderCss.ToggleNavBtn


const about = "<> About </>"
const project = "<> Projects </>"

const Header = () =>{

    const [activeNav, setActiveNav] = useState("mobileNav")

    return(
        <div className={headerWrapper}>
            {<header className={header}>
                <a href="/">
                    <img src={logo} className={Logo} alt="My Logo"/>
                </a>
                <nav className={`${nav} ${activeNav}`}>
                    <ul>
                        <li><Link className={lists} onClick={() => setActiveNav("mobileNav")} to="about" spy={true} smooth={true} offset={50} duration={500}>{about}</Link></li>
                        <li><Link className={lists} onClick={() => setActiveNav("mobileNav")} to="projects" spy={true} smooth={true} offset={50} duration={500}>{project}</Link></li>
                    </ul>
                    <div className={headerButtonsMobile}>
                        <a href="https://drive.google.com/file/d/1r-g3W0GlcrSUeWueG6RaiYB5dDeqgtPX/view?usp=sharing" target='_blank' rel="noopener noreferrer" className={resumeBtn}>Resume</a>
                        <Link to="contact" className='button' spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                    </div>
                </nav>
                <div className={headerButtons}>
                    <a href="https://drive.google.com/file/d/1r-g3W0GlcrSUeWueG6RaiYB5dDeqgtPX/view?usp=sharing" target='_blank' rel="noopener noreferrer" className={resumeBtn}>Resume</a>
                    <Link to="contact" className='button' spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                </div>
                <RiMenu3Fill className={ToggleNavBtn} 
                    onClick={() => {
                        if(activeNav === "mobileNav"){
                            setActiveNav("mobileNav mobileNav__active")
                        }else{
                            setActiveNav("mobileNav")
                        }
                    }} 
                />
             </header>}

             <div className={socials}>
                <div className={social}>
                    <a href="https://www.linkedin.com/in/mitchell-dennis-144005247/" rel="noopener noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="Ram Maheshwari Linkedin Profile" />
                    </a>
                </div>
                <div className={social}>
                    <a href="https://twitter.com/Mitchyugan"  rel="noopener noreferrer" target="_blank">
                    <img src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg" alt="RammCodes Twitter Profile" />
                    </a>
                </div>
                <div className={social}>
                    <a href="https://github.com/MITCHYUGAN/"  rel="noopener noreferrer" target="_blank">
                    <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="RammCodes Github Profile" />
                    </a>
                </div>

                <div className={social}>
                    <a href="https://www.instagram.com/mitchyugan/"  rel="noopener noreferrer" target="_blank">
                    <AiFillInstagram />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header