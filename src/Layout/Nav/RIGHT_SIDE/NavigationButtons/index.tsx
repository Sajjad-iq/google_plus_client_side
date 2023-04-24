import { Wrapper } from "../styled/Wrapper.styled"
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'
import { NavUserImg } from "../styled/NavUserImg.styled";
import { UserData } from "../../../../services/LocalStorage/UserData";
import ProfileImage from '../../../../assets/ICONS/ProfileImg.jpg'
import { Link, useLocation } from "react-router-dom";
import { NotificationsButtons } from "./Components/NotificationsButtons";

interface Props {
    SearchButtonDisplay: string
    SearchButtonOnClick: MouseEventHandler
}

export const NavigationButtons = (props: Props) => {

    const User = UserData()
    const Location = useLocation()
    /*     Location.pathname !== "/Notifications" ?
     */
    return (

        Location.pathname === "/Notifications" ? <NotificationsButtons />
            :
            window.innerWidth >= 1024 ?
                <Wrapper>
                    <Link
                        to={"/Notifications"}
                        className='notification-button'
                    >
                        <FontAwesomeIcon className='fa-notification-button' icon={faBell} />
                    </Link>

                    <Link to={"/Profile"}>
                        <NavUserImg src={User.ProfilePicture !== "" ? User.ProfilePicture : ProfileImage} alt="user icon" />
                    </Link>
                </Wrapper>
                :
                window.innerWidth <= 1024 ? null
                    :

                    null
    )
}
