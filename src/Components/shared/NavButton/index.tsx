import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './style.css';


interface Props {
    To: string
    ICON: IconProp
    Name: string
    CLass: string
}

export const NavButton = (props: Props) => {

    const Location = useLocation()

    return (
        <NavLink
            to={props.To}
            className={`link-button ${props.CLass}`}
            style={props.CLass === "footer" ? { color: Location.pathname === `${props.To}` ? 'white' : "gray" } : {}}
        >
            <FontAwesomeIcon className='fa-icon' icon={props.ICON} />
            <p className={`name ${props.CLass}`}>{props.Name}</p>

        </NavLink>
    )
}
