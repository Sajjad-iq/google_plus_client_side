import { Row } from "../Row.styled"
import { PostWrapper } from "./styled/PostWrapper.styled"
import { P } from "./styled/P.styled"
import { PostBody } from "./styled/PostBody.styled"
import { Text } from "./styled/Text.styled"
import { PostImg } from "./styled/PostImg.styled"
import { Like } from "./Like"
import { CommentsButton } from "./Comments"
import { Share } from "./Share"
import { UserName } from "../../common/UserName.styled"
import { UserLogo } from "../../common/UserLogo.styled"
import { MouseEventHandler } from "react"
import { UrlLink } from "../../common/UrlLink.styled"
import { DateCalculate } from "../../../services/PostsServices/DateCalculate"


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
}

export const Post = (props: Props) => {

    const DateCalculator = DateCalculate(props.CreatedAt)



    return (
        <PostWrapper IsForPreview={props.IsForPreviewWindow}>
            <Row padding="10px" align="space-between" width="100%">
                <Row padding="0" align="center" width="auto">
                    <UserLogo onClick={props.onClickOnLogo} src={props.PostOwnerImage} alt="User Photo" />
                    <UserName onClick={props.onClickOnLogo} IsCommentUserName={false}>{props.PostOwnerName}</UserName>
                    <P>Public</P>
                </Row>
                <P>{DateCalculator()}</P>
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
