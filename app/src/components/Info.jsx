import avatar from "../images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons" 
import { faLinkedin } from "@fortawesome/free-brands-svg-icons" 


export default function Info(){
    return(
        <main className="mainSection">
            <img src={avatar} className="avatarImg" alt="avatar-img" />
            <div className="mainTextSection">
                <h2>Laura Smith</h2>
                <h4>Frontend Developer</h4>
                <p>laurasmith.website</p>
                <div className="mainBtns">
                    <button className="gmailBtn"><FontAwesomeIcon icon={faEnvelope} className="gmailIconBtn"/> Email</button>
                    <button className="linkedinBtn"><FontAwesomeIcon icon={faLinkedin} className="linkedinIconBtn"/> LinkedIn</button>
                </div>
            </div>
        </main>
    )
}