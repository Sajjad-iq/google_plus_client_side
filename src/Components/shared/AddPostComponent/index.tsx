import { MouseEventHandler } from "react"
import UserIcon from "../../../assets/ICONS/ProfileImg.jpg"
import { UserData } from "../../../services/LocalStorage/UserData"
import { UserLogo } from "../../common/UserLogo.styled"
import { Row } from "../Row.styled"
import { ToggleRow } from "./styled/ToggleRow.styled"
import { WriteSomething } from "./styled/WriteSomething.styled"
import { ImageButton } from "./ImageButton"
import { useTranslation } from "react-i18next"

interface Props {
    IsActive: boolean
    GoToAddPostPage: MouseEventHandler

}

export const AddPostComponent = (props: Props) => {
    let User = UserData()
    const { t } = useTranslation()

    return (
        <ToggleRow display={props.IsActive ? "flex" : "none"} width="100%" align="space-between" padding="10px" onClick={props.GoToAddPostPage}>

            <Row padding="0" width="80%" align="flex-start">
                <UserLogo src={User.ProfilePicture === "" ? UserIcon : User.ProfilePicture} alt="user" />
                <WriteSomething>{t("post_addWindow")}</WriteSomething>
            </Row>

            <ImageButton Style={{}} onClick={() => ""} />
        </ToggleRow>

    )
}
