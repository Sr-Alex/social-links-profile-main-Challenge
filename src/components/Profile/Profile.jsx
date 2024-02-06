import ProfileContainer from "./Profile.styles";

import avatar from "../../assets/images/avatar-jessica.jpeg"
import RedirectButton from "../RedirectButton/RedirectButton.styles";

function Profile() {
    return <ProfileContainer>
        <figure>
            <img src={avatar} />
        </figure>
        <h2>Jessica Randall</h2>
        <h3>London, United Kingdom</h3>
        <p>{'"Front-end developer and avid reader"'}</p>

        <nav>
         <RedirectButton>GitHub</RedirectButton>
         <RedirectButton>Frontend Mentor</RedirectButton>
         <RedirectButton>LinkedIn</RedirectButton>
         <RedirectButton>Twitter</RedirectButton>
         <RedirectButton>Instagram</RedirectButton>
        </nav>
    </ProfileContainer>
}

export default Profile;