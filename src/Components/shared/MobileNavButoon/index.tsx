import { NavLink } from "react-router-dom";
import './style.css';


interface Props {
    To: string
    ICON: string
    Name: string
    Style: {}
}

export const MobileNavButton = (props: Props) => {
    return (
        <NavLink
            to={props.To}
            className={`mobile-link-button`}
            style={props.Style}
        >
            <img className="mobile-nav-button" src={props.ICON} alt="nav" />
            <p className={`mobile-link-button-name`} style={props.Style}>{props.Name}</p>

        </NavLink>
    )
}
