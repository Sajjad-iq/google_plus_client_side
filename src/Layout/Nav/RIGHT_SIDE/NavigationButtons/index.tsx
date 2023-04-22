import { Wrapper } from "../styled/Wrapper.styled"
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'
import { NavUserImg } from "../styled/NavUserImg.styled";
import { UserData } from "../../../../services/LocalStorage/UserData";
import ProfileImage from '../../../../assets/ICONS/ProfileImg.jpg'
import { Link } from "react-router-dom";

interface Props {
    SearchButtonDisplay: string
    SearchButtonOnClick: MouseEventHandler
}

export const NavigationButtons = (props: Props) => {

    const User = UserData()

    return (
        <Wrapper>
            <div style={{ display: window.innerWidth >= 1024 ? "flex" : "none" }}>
                <Link
                    to={"/Notifications"}
                    className='notification-button'
                >
                    <FontAwesomeIcon className='fa-notification-button' icon={faBell} />
                </Link>
            </div>

            <Link to={"/Profile"}>
                <NavUserImg src={User.ProfilePicture !== "" ? User.ProfilePicture : ProfileImage} alt="user icon" />
            </Link>
        </Wrapper>
    )
}
