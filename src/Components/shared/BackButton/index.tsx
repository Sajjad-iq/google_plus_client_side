import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./style.css"
import { MouseEventHandler } from 'react';
import { Button } from '../../common/Button.styled';
interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>
    color: string
    style?: {}
}
export const BackButton = (props: Props) => {
    return (
        <Button onClick={props.onClick} style={props.style}>
            <FontAwesomeIcon className='back-arrow' style={{ color: props.color }} icon={faArrowLeft} />
        </Button>
    )
}
