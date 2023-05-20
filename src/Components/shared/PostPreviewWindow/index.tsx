import { MouseEventHandler, useContext, useRef, useState } from 'react'
import { AddLike } from '../../../services/PostsServices/AddLike'
import { BackButton } from '../BackButton'
import { PostComments } from './Components/Commints'
import { OptionButtonAndOptionsWindow } from './Components/OptionButtonAndOptionsWindow'
import { Row } from './Components/OptionButtonAndOptionsWindow/styled/Row.styled'
import { Wrapper } from './styled/Wrapper.styled'
import UserProfileImage from "../../../assets/ICONS/ProfileImg.jpg"
import { SetFindUser } from '../../../services/PeopleServices/SetFindUser'
import { LoadingAnimation } from '../LoadingAnimation'
import { Post } from '../Post'
import { GlobalContext } from '../../../Context/GlobalContext'
import { UserData } from '../../../services/LocalStorage/UserData'
import { AddComment } from '../AddComment'
import { AddCommentServices } from '../../../services/PostsServices/AddCommentServices'
import Image from '../../../assets/ICONS/ProfileImg.jpg'

interface Props {
    BackHandler: MouseEventHandler
    Loading: boolean
}

export const PostPreviewWindow = (props: Props) => {

    let User = UserData()
    const { SpecificPost } = useContext(GlobalContext)
    const { AddLikeHandler } = AddLike()
    const { SetFindUserHandler } = SetFindUser()
    const Ref = useRef<any>(null)
    const RestTextFelidValueReload = () => Ref ? Ref.current.value = "" : ""
    const { onChange, CommentSubmitHandler, TextFieldValue, isLoading } = AddCommentServices(RestTextFelidValueReload)



    return (
        props.Loading && SpecificPost.PostBody == "" ?

            <Row style={{ display: props.Loading ? "flex" : "none", background: "none" }} width='100%' padding='20px' align='center' >
                <LoadingAnimation />
            </Row>

            :

            <Wrapper>
                <Row width='100%' align='space-between' padding='10px 25px'>
                    <BackButton color={"black"} onClick={props.BackHandler} />
                    <OptionButtonAndOptionsWindow Data={SpecificPost} />
                </Row>

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
                    onHitLike={() => AddLikeHandler(SpecificPost)}
                    IsUserHitLike={SpecificPost.Likes ? SpecificPost.Likes.includes(User._id) : false}
                    PostOwnerName={SpecificPost.PostOwnerName}
                    PostOwnerImage={SpecificPost.PostOwnerImage !== "" ? SpecificPost.PostOwnerImage : UserProfileImage}
                />

                <PostComments />

                <AddComment IsLoading={isLoading} TextValue={TextFieldValue} Ref={Ref} UserImage={User.ProfilePicture !== "" ? User.ProfilePicture : Image} onSubmit={() => CommentSubmitHandler()} onChange={onChange} />
            </Wrapper>
    )
}
