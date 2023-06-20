import { MouseEventHandler, useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { PostToggleSection } from '../../../Pages/Home/styled/PostsToggleSection.styled'
import { AddLike } from '../../../services/PostsServices/AddLike'
import { Post } from '../Post'
import UserIMG from "../../../assets/ICONS/ProfileImg.jpg"
import { SetFindUser } from '../../../services/PeopleServices/SetFindUser'
import { Row } from '../Row.styled'
import { LoadingAnimation } from '../LoadingAnimation'
import { AddPostComponent } from '../AddPostComponent'
import { useNavigate } from 'react-router-dom'
import { UserData } from '../../../services/LocalStorage/UserData'


interface Props {
    OnClickOnPost: MouseEventHandler
    Response: any
    IsForProfile: boolean
    Loading: boolean
}

export const Posts = (props: Props) => {

    const User = UserData()
    const { AddLikeHandler } = AddLike()
    const { SetFindUserHandler } = SetFindUser()
    const Navigate = useNavigate()
    const [post, setPost] = useState(null)


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
        <PostToggleSection style={{ minHeight: "80vh" }} display={"block"}>
            < ResponsiveMasonry
                columnsCountBreakPoints={{ 768: 1, 1023: 2, 1919: 3 }}
            >
                <Masonry >
                    <AddPostComponent GoToAddPostPage={() => Navigate("/AddPost")} IsActive={!props.IsForProfile} />

                    <Row style={{ display: props.Loading && props.Response.length <= 1 ? "flex" : "none", background: "none" }} width='100%' padding='10px' align='center' >
                        <LoadingAnimation />
                    </Row>

                    {
                        props.Response?.map((e: any) => {

                            if (e) {

                                return e._id !== "" ? <Post
                                    CollectionName={e.CollectionName}
                                    PostState={e.PostFrom}
                                    onClickOnLogo={() => SetFindUserHandler(e.PostOwnerId)}
                                    CreatedAt={e.createdAt}
                                    IsForPreviewWindow={false}
                                    key={e._id}
                                    onClick={() => props.OnClickOnPost(e)}
                                    PostBody={e.PostBody}
                                    PostImage={e.PostImage}
                                    IncludingUrl={e.Link}
                                    LikesCount={e.Likes.length}
                                    CommentsCount={e.CommentsCounter}
                                    onHitLike={() => setPost(e)}
                                    IsUserHitLike={e.Likes.includes(User._id)}
                                    PostOwnerName={e.PostOwnerName}
                                    PostOwnerImage={e.PostOwnerImage !== "" ? e.PostOwnerImage : UserIMG}
                                />
                                    :
                                    null
                            }
                        }
                        )
                    }
                </Masonry>
            </ResponsiveMasonry >
        </PostToggleSection>
    )
}
