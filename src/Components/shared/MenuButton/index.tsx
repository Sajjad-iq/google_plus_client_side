import { MouseEventHandler } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../common/Button.styled";
import "./style.css";
interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const MenuButton = (props: Props) => {
    return (
        <Button onClick={props.onClick}>
            <FontAwesomeIcon className='burger-btn' icon={faBars} />
        </Button>
    )
}
