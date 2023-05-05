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
    UserName: any
    NotificationMessage: string
    NotificationIds: []
    onClick: MouseEventHandler
}

export const NotificationsCard = (props: Props) => {

    let sliceArr
    let usersName

    if (Array.isArray(props.UserName)) {
        usersName = props.UserName.join(",");
        sliceArr = props.UserName.slice(0, 6)
        sliceArr.join(",")
    }


    return (
        <BorderWrapper onClick={props.onClick}>
            <NotificationsCardImage Images={props.UserImages} />

            <Column width='80%' align='flex-start' padding='0' style={{ background: "none" }}>
                <NotificationsUserName >{props.UserName.length > 6 ? `${sliceArr} and ${props.NotificationIds.length} others` : usersName}</NotificationsUserName>

                <NotificationsBody>{props.NotificationMessage}</NotificationsBody>
            </Column>
        </BorderWrapper>
    )
}
