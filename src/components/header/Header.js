import logo from './Img/logo.svg'
import HeaderCss from './Header.module.css'

const headerWrapper = HeaderCss.headerWrapper
const Logo = HeaderCss.Logo
const nav = HeaderCss.nav
const headerButtons = HeaderCss.headerButtons

const about = "<> About </>"
const project = "<> Project </>"
const socials = "<> Socials </>"

const Header = () =>{
    return(
        <div className={headerWrapper}>
            <header className='header'>
                <img src={logo} className={Logo} alt="My Logo"/>
                <nav className={nav}>
                    <ul>
                        <li><a href="#about">{about}</a></li>
                        <li><a href="#projects">{project}</a></li>
                        <li><a href="#socials">{socials}</a></li>
                    </ul>
                </nav>
                <div className={headerButtons}>
                    <button>Resume</button>
                    <button className='button'>Contact</button>
                </div>
             </header>
        </div>
    )
}

export default Header