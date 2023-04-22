import React, { MouseEventHandler } from 'react'
import { Row } from '../Row.styled'
import { UserName } from './styled/UserName.styled'
import { UserLogo } from './styled/UserLogo.styled'
import { Button } from '../../common/Button.styled'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import UserImage from "../../../assets/ICONS/ProfileImg.jpg"

interface Props {
    UserName: string
    UserIMG: string
    OnClick: MouseEventHandler
}
export const SmallAddUserCard = (props: Props) => {
    return (
        <Row width='100%' padding='10px' align='center' style={{ justifyContent: "space-between", borderRadius: "5px", margin: "5px 0" }}>
            <Row width='fit-content' padding='0' align='center'>
                <UserLogo src={props.UserIMG !== "" ? props.UserIMG : UserImage} alt="user card" />
                <UserName>{props.UserName}</UserName>
            </Row>

            <Button onClick={props.OnClick}>
                <FontAwesomeIcon className='fa-add-user' icon={faPlus} />
            </Button>
        </Row>
    )
}
