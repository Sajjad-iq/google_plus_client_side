import { MouseEventHandler, useContext, useRef, useEffect, useState } from 'react'
import { AddLike } from '../../../services/PostsServices/AddLike'
import { PostComments } from './Components/Commints'
import { Wrapper } from './styled/Wrapper.styled'
import UserProfileImage from "../../../assets/ICONS/ProfileImg.jpg"
import { SetFindUser } from '../../../services/PeopleServices/SetFindUser'
import { LoadingAnimation } from '../LoadingAnimation'
import { Post } from '../Post'
import { GlobalContext } from '../../../Context/GlobalContext'
import { UserData } from '../../../services/LocalStorage/UserData'
import { AddComment } from '../AddComment'
import { DropDownOptionsBottom } from '../DropDownOptions'
import { OptionsButton } from '../DropDownOptions/styled/OptionsButton.styled'
import { DeletePost } from '../../../services/PostsServices/DeletePost'
import { Row } from '../Row.styled'
import { useTranslation } from 'react-i18next'

interface Props {
    BackHandler: MouseEventHandler
    Loading: boolean
}

export const PostPreviewWindow = (props: Props) => {

    let User = UserData()
    const { SpecificPost, setSpecificPostComments, setIsEditPostWindowActive } = useContext(GlobalContext)
    const { AddLikeHandler } = AddLike()
    const { SetFindUserHandler } = SetFindUser()
    const [post, setPost] = useState(null)
    const { DeletePostHandler } = DeletePost()
    const { t } = useTranslation()

    useEffect(() => setSpecificPostComments([]), [])
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (post) {
                await AddLikeHandler(post)
                setPost(null)
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [post]);


    return (
        props.Loading && SpecificPost.PostBody == "" ?

            <Row style={{ display: props.Loading ? "flex" : "none", background: "none" }} width='100%' padding='20px' align='center' >
                <LoadingAnimation />
            </Row>

            :

            <Wrapper style={{ background: "none" }}>

                <DropDownOptionsBottom
                    for="post"
                    bottom="-50px"
                    children={
                        <Wrapper style={{ border: "none" }}>
                            <OptionsButton style={{ display: SpecificPost.PostOwnerId == User._id ? "flex" : "none" }}
                                onClick={() => { DeletePostHandler(SpecificPost) }}>
                                {t("post_delete")}
                            </OptionsButton>

                            <OptionsButton style={{ display: SpecificPost.PostOwnerId == User._id ? "flex" : "none" }}
                                onClick={() => setIsEditPostWindowActive(true)}>
                                {t("post_edit")}
                            </OptionsButton>
                            <OptionsButton style={{ display: SpecificPost.PostOwnerId == User._id ? "none" : "flex" }}>{t("post_report")}</OptionsButton>
                        </Wrapper>
                    }
                />

                <Post
                    CollectionName={SpecificPost.CollectionName}
                    PostState={SpecificPost.PostFrom}
                    onClickOnLogo={() => SetFindUserHandler(SpecificPost.PostOwnerId)}
                    CreatedAt={SpecificPost.createdAt}
                    IsForPreviewWindow={true}
                    onClick={null}
                    key={SpecificPost._id}
                    PostBody={SpecificPost.PostBody}
                    PostImage={SpecificPost.PostImage}
                    IncludingUrl={SpecificPost.Link}
                    LikesCount={SpecificPost.Likes ? SpecificPost.Likes.length : 0}
                    CommentsCount={SpecificPost.CommentsCounter}
                    onHitLike={() => setPost(SpecificPost)}
                    IsUserHitLike={SpecificPost.Likes ? SpecificPost.Likes.includes(User._id) : false}
                    PostOwnerName={SpecificPost.PostOwnerName}
                    PostOwnerImage={SpecificPost.PostOwnerImage !== "" ? SpecificPost.PostOwnerImage : UserProfileImage}
                />

                <PostComments />

                <AddComment />
            </Wrapper>
    )
}
