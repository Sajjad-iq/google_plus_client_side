import UserIcon from "../../../../../../assets/ICONS/ProfileImg.jpg"
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { PostStateSelectors } from '../PostStateSelectors'
import { UserLogo } from '../../../../../../Components/common/UserLogo.styled'
import { UserName } from '../../../../../../Components/common/UserName.styled'
import { Row } from "../../../../../../Components/shared/PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/Row.styled"
import { UserData } from "../../../../../../services/LocalStorage/UserData"
import { Column } from "../../../../../../Components/shared/Column.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostState } from "../../../../../../Components/shared/Post/styled/PostState.styled";
import { PostStateChecker } from "../../../../../../services/PostsServices/PostStateChecker";
import { useContext } from "react";
import { GlobalContext } from "../../../../../../Context/GlobalContext";
import { Colors } from "../../../../../../assets/Colors";


export const ProfileImageAndPostState = () => {

    let User = UserData()
    const PostStateCheckerHandler = PostStateChecker()
    const { OptionsValue } = useContext(GlobalContext)

    return (
        <Row padding="0" align="center" width="auto">
            <UserLogo src={User.ProfilePicture == "" ? UserIcon : User.ProfilePicture} alt="User Photo" />

            <Column padding="0" align="flex-start" width="auto">
                <Row width="fit-content" padding="0" align="center">
                    <UserName IsCommentUserName={false}>{`${User.UserName} ${User.FamilyName}`}</UserName>

                    <Row width="fit-content" padding="0px" align="center">
                        <FontAwesomeIcon style={{ fontSize: "0.70rem" }} icon={faCaretRight} />
                        <PostState
                            style={{ color: OptionsValue === "Collections" ? Colors.Secoundry.Cyan : Colors.Primary.Lightgray }}
                        >{PostStateCheckerHandler()}</PostState>
                    </Row>

                </Row>
                <PostStateSelectors />
            </Column>
        </Row>
    )
}

