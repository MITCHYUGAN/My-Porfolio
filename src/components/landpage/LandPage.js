import img from './Img/img.svg'
import LandingPageCss from './Landpage.module.css'
import { Skills } from '../Data/SkillsData'

const landingPage = LandingPageCss.landingPage
const headingText = LandingPageCss.headingText
const paragraphText = LandingPageCss.paragraphText
const landPageContents = LandingPageCss.landPageContents
const landPageContents_skills_Bio = LandingPageCss.landPageContents_skills_Bio
const bioContainer = LandingPageCss.bioContainer
const skillsContainer = LandingPageCss.skills
const skillsButtons = LandingPageCss.skillsButtons
const imageWrapper = LandingPageCss.imageWrapper
const image = LandingPageCss.image

const LandPage = () =>{
    return(
        <div className={landingPage}>
            <h1 className={headingText}>Hi, I am <span>Mitchyugan</span></h1>
            <p className={paragraphText}>Frontend Developer</p>

            <div className={landPageContents}>
                <div className={landPageContents_skills_Bio}>
                    <div className={bioContainer}>
                        <p>
                            I love to explore and create 
                            Stuff on the web, So I learnt 
                            How to Code.
                        </p>
                        <button>Full Bio</button>
                    </div>
                    <div className={skillsContainer}>
                        <h4>My skills</h4>
                        <div className={skillsButtons}>
                   {
                    Skills.map(({skills}) =>{
                        return(
                            <button>{skills}</button>
                        )
                        })}                        
                        </div>
                    </div>  
                </div>
                <div className={imageWrapper}>
                    <img src={img} className={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default LandPage