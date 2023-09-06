import { MouseEventHandler } from 'react'
import { Column } from '../Column.styled'
import { NotificationsBody } from './styled/NotificationsBody.syled'
import { NotificationsCardImage } from './Components/NotificationsCardImage'
import { NotificationsUserName } from './styled/NotificationsUserName.styled'
import { Colors } from '../../../assets/Colors'
import { Wrapper } from '../Wrapper'

interface Props {
    UserImages: ["", "", "", ""]
    UsersName: []
    NotificationMessage: string
    NotificationIds: []
    IsRead: boolean
    onClick: MouseEventHandler
}

export const NotificationsCard = (props: Props) => {

    let sliceArr
    let usersName

    if (Array.isArray(props.UsersName)) {
        usersName = props.UsersName.join(",");
        sliceArr = props.UsersName.slice(0, 8)
        sliceArr.join(",")
    }


    return (
        <Wrapper onClick={props.onClick} style={props.IsRead ? { background: Colors.Primary.SoftGray, opacity: "0.80", padding: "10px", justifyContent: "flex-start" } : { padding: "10px", justifyContent: "flex-start" }}>
            <NotificationsCardImage Images={props.UserImages} />

            <Column width='77%' align='flex-start' padding='0' style={{ background: "none", margin: "0 10px" }}>
                <NotificationsUserName >{props.UsersName.length > 6 ? `${sliceArr} and ${props.NotificationIds.length || "0"} others` : usersName}</NotificationsUserName>

                <NotificationsBody>{props.NotificationMessage}</NotificationsBody>
            </Column>
        </Wrapper>
    )
}
