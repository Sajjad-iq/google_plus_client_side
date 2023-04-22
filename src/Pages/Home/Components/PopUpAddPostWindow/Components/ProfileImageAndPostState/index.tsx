import UserIcon from "../../../../../../assets/ICONS/ProfileImg.jpg"

import { PostStateSelectors } from '../PostStateSelectors'
import { UserLogo } from '../../../../../../Components/common/UserLogo.styled'
import { UserName } from '../../../../../../Components/common/UserName.styled'
import { Row } from "../../../../../../Components/shared/PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/Row.styled"
import { UserData } from "../../../../../../services/LocalStorage/UserData"
import { Column } from "../../../../../../Components/shared/Column.styled"

interface Props {
    setSelectorsValue: any
}
export const ProfileImageAndPostState = (props: Props) => {
    let User = UserData()

    return (
        <Row padding="0" align="center" width="auto">
            <UserLogo src={User.ProfilePicture == "" ? UserIcon : User.ProfilePicture} alt="User Photo" />

            <Column padding="0" align="flex-start" width="auto">
                <UserName IsCommentUserName={false}>{`${User.UserName} ${User.FamilyName}`}</UserName>
                <PostStateSelectors setSelectWindow={props.setSelectorsValue} />
            </Column>
        </Row>
    )
}
