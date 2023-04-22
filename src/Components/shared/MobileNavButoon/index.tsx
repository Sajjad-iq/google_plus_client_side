import { NavLink } from "react-router-dom";
import './style.css';


interface Props {
    To: string
    ICON: string
    Name: string
    CLass: string
}

export const MobileNavButton = (props: Props) => {
    return (
        <NavLink
            to={props.To}
            className={`mobile-link-button ${props.CLass}`}
        >
            <img className="mobile-nav-button" src={props.ICON} alt="nav" />
            <p className={`mobile-link-button-name ${props.CLass}`}>{props.Name}</p>

        </NavLink>
    )
}
