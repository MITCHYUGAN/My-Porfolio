import { useState } from 'react'
import { Link } from "react-scroll"
import React from 'react'
import logo from './Img/logo.svg'
import HeaderCss from './Header.module.css'
import { RiMenu3Fill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const headerWrapper = HeaderCss.headerWrapper
const header = HeaderCss.header
const Logo = HeaderCss.Logo
const nav = HeaderCss.nav
const lists = HeaderCss.lists
const headerButtons = HeaderCss.headerButtons
const resumeBtn = HeaderCss.resumeBtn
const socials = HeaderCss.socials
const social = HeaderCss.social
const headerBackgroundActive = HeaderCss.active



const headerButtonsMobile = HeaderCss.headerButtonsMobile
const ToggleNavBtn = HeaderCss.ToggleNavBtn


const about = "{ About }"
const project = "{ Projects }"

const Header = () =>{

    const [activeNav, setActiveNav] = useState("mobileNav")
    const [ headerBackground, setHeaderBackground ] = useState(headerWrapper)

    const changeBackground = () =>{
        if (window.scrollY >= 80) {
            setHeaderBackground(headerBackgroundActive)
            console.log("Background Added")
        } else {
            setHeaderBackground(headerWrapper)
        }
    }

    window.addEventListener("scroll", changeBackground)

    return(
        <div className={`${headerWrapper} ${headerBackground}`}>
            {<header className={header}>
                <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
                    <img src={logo} className={Logo} alt="My Logo"/>
                </Link>
                <nav className={`${nav} ${activeNav}`}>
                    <ul>
                        <li><Link className={lists} onClick={() => setActiveNav("mobileNav")} to="about" spy={true} smooth={true} offset={50} duration={500}>{about}</Link></li>
                        <li><Link className={lists} onClick={() => setActiveNav("mobileNav")} to="projects" spy={true} smooth={true} offset={50} duration={500}>{project}</Link></li>
                    </ul>
                    <div className={headerButtonsMobile}>
                        <a href="https://drive.google.com/file/d/1r-g3W0GlcrSUeWueG6RaiYB5dDeqgtPX/view?usp=sharing" target='_blank' rel="noopener noreferrer" className={resumeBtn}>Resume</a>
                        <Link to="contact" onClick={() => setActiveNav("mobileNav")} className='button' spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
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
                    <AiFillLinkedin />
                    </a>
                </div>
                <div className={social}>
                    <a href="https://twitter.com/Mitchyugan"  rel="noopener noreferrer" target="_blank">
                    <AiFillTwitterCircle />
                    </a>
                </div>
                <div className={social}>
                    <a href="https://github.com/MITCHYUGAN/"  rel="noopener noreferrer" target="_blank">
                    <AiFillGithub />
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