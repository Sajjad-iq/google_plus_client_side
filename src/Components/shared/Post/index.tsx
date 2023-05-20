import { Row } from "../Row.styled"
import { PostWrapper } from "./styled/PostWrapper.styled"
import { PostState } from "./styled/PostState.styled"
import { PostBody } from "./styled/PostBody.styled"
import { Text } from "./styled/Text.styled"
import { PostImg } from "./styled/PostImg.styled"
import { Like } from "./Like"
import { CommentsButton } from "./Comments"
import { Share } from "./Share"
import { UserName } from "../../common/UserName.styled"
import { UserLogo } from "../../common/UserLogo.styled"
import { MouseEventHandler, useContext } from "react"
import { UrlLink } from "../../common/UrlLink.styled"
import { DateCalculate } from "../../../services/PostsServices/DateCalculate"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Colors } from "../../../assets/Colors"
import { GlobalContext } from "../../../Context/GlobalContext"


interface Props {
    onClick: any
    PostBody: string
    PostImage: string
    LikesCount: number
    CommentsCount: number
    onHitLike: any
    PostOwnerName: string
    IsUserHitLike: boolean,
    PostOwnerImage: string
    IsForPreviewWindow: boolean
    CreatedAt: string
    onClickOnLogo: MouseEventHandler
    IncludingUrl: string
    PostState: string
    CollectionName: string
}

export const Post = (props: Props) => {

    const DateCalculator = DateCalculate(props.CreatedAt)
    const { OptionsValue } = useContext(GlobalContext)



    return (
        <PostWrapper IsForPreview={props.IsForPreviewWindow}>
            <Row padding="10px" align="space-between" width="100%">
                <Row padding="0" align="center" width="auto">
                    <UserLogo onClick={props.onClickOnLogo} src={props.PostOwnerImage} alt="User Photo" />
                    <UserName onClick={props.onClickOnLogo} IsCommentUserName={false}>{props.PostOwnerName}</UserName>

                    <Row width="fit-content" padding="0 5px" align="center">
                        <FontAwesomeIcon style={{ fontSize: "0.70rem" }} icon={faCaretRight} />

                        <PostState style={{ color: props.PostState === "Collections" ? Colors.Secoundry.Cyan : Colors.Primary.SoftBlack }}
                        >
                            {props.PostState === "Collections" ? props.CollectionName : "Public"}
                        </PostState>
                    </Row>                </Row>
                <PostState>{DateCalculator()}</PostState>
            </Row>

            <PostBody onClick={props.onClick}>
                <Text>{props.PostBody}</Text>
                <UrlLink style={{ padding: "0 10px" }} target={"_blank"} href={props.IncludingUrl}>{props.IncludingUrl}</UrlLink>
                <PostImg loading={"lazy"} src={props.PostImage} />
            </PostBody>

            <Row padding="10px" align="space-between" width="100%">

                <Like IsForPreviewWindow={props.IsForPreviewWindow} IsUserHitLike={props.IsUserHitLike} onHitLike={props.onHitLike} LikesCount={props.LikesCount} />

                <Row padding="0" align="center" width="auto">
                    <CommentsButton CommentsCount={props.CommentsCount} onClick={props.onClick} />
                    <Share />
                </Row>
            </Row>
        </PostWrapper>
    )
}
