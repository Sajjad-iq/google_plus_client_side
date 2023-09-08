import { MouseEventHandler } from "react"
import { Colors } from "../../../assets/Colors"
import { UserData } from "../../../services/LocalStorage/UserData"
import { UserLogo } from "../../common/UserLogo.styled"
import { UserName } from "../../common/UserName.styled"
import { LoadingButton } from "../LoadingButton"
import { UserCardDescription } from "../UserCard/styled/UserCardDescription.styled"
import { UserCardWrapper } from "../UserCard/styled/UserCardWrapper.styled"
import UserIMG from "../../../assets/ICONS/ProfileImg.jpg"

interface Props {
    UserName: string
    UserImg: string
    description: string
    onClick: MouseEventHandler
    IsLoading: boolean
    Followers: any
    Color: string
    OnClickAdd: MouseEventHandler
}
export const CollectionFindCard = (props: Props) => {

    const User = UserData()

    return (
        <UserCardWrapper style={{ background: props.Color }}>
            <UserLogo
                src={props.UserImg !== "" ? props.UserImg : UserIMG}
            />

            <UserCardDescription style={{ color: "white" }}>
                {props.description}
            </UserCardDescription>

            <UserName
                IsCommentUserName={true}
                style={{ color: "white" }}
            >{props.UserName}
            </UserName>

            <LoadingButton
                IsLoading={false}
                onClick={props.OnClickAdd}
                ButtonName={"+"}
                Style={{ background: "none", fontSize: "2rem", margin: "0px", color: Colors.Secoundry.Cyan, padding: "0" }}
            />
        </UserCardWrapper>

    )
}
