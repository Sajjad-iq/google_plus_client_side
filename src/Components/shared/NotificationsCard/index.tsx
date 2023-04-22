import React, { MouseEventHandler } from 'react'
import UserIMG from "../../../assets/ICONS/ProfileImg.jpg"
import { Column } from '../Column.styled'
import { P } from '../SingleCommint/styled/P.styled'
import { NotificationsBody } from './styled/NotificationsBody.syled'
import { Row } from '../Row.styled'
import { UserLogo } from '../../common/UserLogo.styled'
import { UserName } from '../../common/UserName.styled'
import { BorderWrapper } from '../../common/BorderWrapper'

interface Props {
    UserImg: string
    UserName: string
    NotificationMessage: string
    CreatedAt: any
    onClick: MouseEventHandler
}

export const NotificationsCard = (props: Props) => {


    const DateCalculator = () => {
        var CreatedAt = new Date(props.CreatedAt);
        var NowDate = new Date(Date.now());
        var Difference = NowDate.getTime() - CreatedAt.getTime();
        var Difference_In_Days = Difference / (1000 * 3600 * 24);
        var Difference_In_Hours = Difference / (1000 * 3600);
        var Difference_In_Minutes = Difference / (1000 * 60);

        if (Difference_In_Minutes < 60) return `${Difference_In_Minutes.toFixed()} min`
        else if (Difference_In_Hours < 24 && Difference_In_Minutes > 60) return `${Difference_In_Hours.toFixed()} hour`
        else return `${Difference_In_Days.toFixed()} day`
    }

    return (
        <BorderWrapper onClick={props.onClick}>
            <Row width={window.innerWidth >= 720 ? "95%" : "85%"} align='flex-start' padding='0' style={{ background: "none" }}>
                <UserLogo
                    src={props.UserImg !== "" ? props.UserImg : UserIMG}
                />

                <Column width='75%' align='flex-start' padding='0' style={{ background: "none" }}>
                    <UserName IsCommentUserName={false}>{props.UserName}</UserName>

                    <NotificationsBody>{props.NotificationMessage}</NotificationsBody>
                </Column>
            </Row>

            <P>{DateCalculator()}</P>
        </BorderWrapper>
    )
}
