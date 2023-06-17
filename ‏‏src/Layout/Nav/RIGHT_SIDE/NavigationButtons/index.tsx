import { Wrapper } from "../styled/Wrapper.styled"
import { MouseEventHandler, useContext } from "react";
import './style.css'
import { NavUserImg } from "../styled/NavUserImg.styled";
import { UserData } from "../../../../services/LocalStorage/UserData";
import ProfileImage from '../../../../assets/ICONS/ProfileImg.jpg'
import { Link, useLocation } from "react-router-dom";
import { NotificationsButtons } from "./Components/NotificationsButtons";
import { NotificationsBell } from "../../../../Components/shared/NotificationsBell";
import { GlobalContext } from "../../../../Context/GlobalContext";

interface Props {
    SearchButtonDisplay: string
    SearchButtonOnClick: MouseEventHandler
}

export const NavigationButtons = (props: Props) => {

    const User = UserData()
    const Location = useLocation()
    const { HasNotifications } = useContext(GlobalContext)
    return (

        Location.pathname === "/Notifications" ?

            <NotificationsButtons />
            :
            window.innerWidth >= 1024 ?
                <Wrapper>
                    <NotificationsBell Name="" isForNav={true} CLass='footer' HasNotifications={HasNotifications} />

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
