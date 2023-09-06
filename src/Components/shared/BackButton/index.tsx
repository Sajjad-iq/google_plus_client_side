import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./style.css"
import { MouseEventHandler } from 'react';
import { Button } from '../../common/Button.styled';
interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>
    color: string
}
export const BackButton = (props: Props) => {
    return (
        <Button onClick={props.onClick}>
            <FontAwesomeIcon className='back-arrow' style={{ color: props.color }} icon={faArrowLeft} />
        </Button>
    )
}
