import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../../../assets/GlobalStyles/style.css"
import { MouseEventHandler } from 'react';
import { Button } from '../../common/Button.styled';
interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>
    color: string
}
export const BackButton = (props: Props) => {
    return (
        <Button onClick={props.onClick}>
            <FontAwesomeIcon className='post-fa-icon' style={{ color: props.color }} icon={faChevronLeft} />
        </Button>
    )
}
