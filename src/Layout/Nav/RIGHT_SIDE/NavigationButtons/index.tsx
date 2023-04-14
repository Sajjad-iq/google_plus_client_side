import { SearchButton } from "./SearchButton"
import { Wrapper } from "../styled/Wrapper.styled"
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './style.css'
interface Props {
    SearchButtonDisplay: string
    SearchButtonOnClick: MouseEventHandler
}

export const NavigationButtons = (props: Props) => {
    return (
        <Wrapper>
            <SearchButton onClick={props.SearchButtonOnClick} display={props.SearchButtonDisplay} />
            <div style={{ display: window.innerWidth >= 1024 ? "flex" : "none" }}>
                <Link
                    to={"/Notifications"}
                    className='notification-button'
                >
                    <FontAwesomeIcon className='fa-notification-button' icon={faBell} />
                </Link>
            </div>
        </Wrapper>
    )
}
