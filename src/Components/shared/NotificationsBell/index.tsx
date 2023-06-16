import { faBell } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import '../NavButton/style.css'
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    CLass: string
    HasNotifications: boolean
    Name: string
    isForNav: boolean
}
export const NotificationsBell = (props: Props) => {
    const Location = useLocation()

    return (
        <NavLink
            to={"/Notifications"}
            className={`link-button ${props.CLass}`}
        >
            {
                props.HasNotifications ?
                    <div className="Has-notifications">
                        <span className="red-circle"></span>
                        <FontAwesomeIcon color={props.isForNav ? "white" : Location.pathname === "/Notifications" ? "rgb(198, 62, 62)" : "gray"} className='fa-icon' icon={faBell} />
                    </div>
                    :
                    <FontAwesomeIcon color={props.isForNav ? "white" : Location.pathname === "/Notifications" ? "rgb(198, 62, 62)" : "gray"} className='fa-icon' icon={faBell} />
            }
            <p className={`name ${props.CLass}`}>{props.Name}</p>

        </NavLink>)
}
