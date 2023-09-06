import { MouseEventHandler } from 'react'
import UserIMG from "../../../assets/ICONS/ProfileImg.jpg"
import { UserLogo } from '../../common/UserLogo.styled'
import { UserName } from '../../common/UserName.styled'
import { UserCardWrapper } from './styled/UserCardWrapper.styled'
import { UserCardDescription } from './styled/UserCardDescription.styled'
import { LoadingButton } from '../LoadingButton'
import { UserData } from '../../../services/LocalStorage/UserData'
import { Colors } from '../../../assets/Colors'

interface Props {
    IsForSearch?: boolean
    UserName: string
    UserImg: string
    description: string
    onClick: MouseEventHandler
    IsLoading: boolean
    Followers: any
    OnClickAdd: MouseEventHandler
}
export const UserCard = (props: Props) => {

    const User = UserData()

    return (

        <UserCardWrapper onClick={props.onClick}>
            <UserLogo
                src={props.UserImg !== "" ? props.UserImg : UserIMG}
            />

            <UserCardDescription >
                {props.description}
            </UserCardDescription>

            <UserName
                IsCommentUserName={true}
                style={{ textAlign: "center" }}
            >{props.UserName}
            </UserName>

            <LoadingButton
                IsLoading={false}
                onClick={() => ""}
                ButtonName={props.Followers.includes(User._id) ? "UN FOLLOW" : "FOLLOW"}
                Style={{ background: "none", padding: "0", fontSize: "0.75rem", color: Colors.Secoundry.Cyan, margin: "8px" }}
            />
        </UserCardWrapper>
    )
}
