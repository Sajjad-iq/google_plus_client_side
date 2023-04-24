import React, { MouseEventHandler } from 'react'
import UserIMG from "../../../assets/ICONS/ProfileImg.jpg"
import { Column } from '../Column.styled'
import { P } from '../SingleCommint/styled/P.styled'
import { NotificationsBody } from './styled/NotificationsBody.syled'
import { Row } from '../Row.styled'
import { UserLogo } from '../../common/UserLogo.styled'
import { UserName } from '../../common/UserName.styled'
import { BorderWrapper } from '../../common/BorderWrapper'
import { DateCalculate } from '../../../services/PostsServices/DateCalculate'
import { NotificationsCardImage } from './Components/NotificationsCardImage'
import { NotificationsUserImage } from './styled/NotificationsUserImage.styled'
import { NotificationsUserName } from './styled/NotificationsUserName.styled'

interface Props {
    UserImages: ["", "", "", ""]
    UserName: string
    NotificationMessage: string
    onClick: MouseEventHandler
}

export const NotificationsCard = (props: Props) => {

    return (
        <BorderWrapper onClick={props.onClick}>
            <NotificationsCardImage Images={props.UserImages} />

            <Column width='80%' align='flex-start' padding='0' style={{ background: "none" }}>
                <NotificationsUserName >{props.UserName}</NotificationsUserName>

                <NotificationsBody>{props.NotificationMessage}</NotificationsBody>
            </Column>
        </BorderWrapper>
    )
}
