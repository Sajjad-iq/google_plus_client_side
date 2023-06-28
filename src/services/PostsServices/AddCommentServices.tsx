import axios from 'axios';
import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';
import { CommentsContext } from '../../Context/CommentsContext';

export const AddCommentServices = (RestTextFelidValueReload: any) => {

    const User = UserData()
    const [TextFieldValue, setTextFieldValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { SpecificPost, setSpecificPost } = useContext(GlobalContext)
    const { ReplayTo, setReplayTo, ReplayToId, setReplayToId } = useContext(CommentsContext)
    const [Url, setUrl] = useState("")
    const [Photo, setPhoto] = useState<any>("")


    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFieldValue(e.target.value)

    const CommentSubmitHandler = async (setComments: any, Comments: any) => {


        try {
            setIsLoading(true)
            if (TextFieldValue) {


                await axios({
                    method: 'put',
                    url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/AddComment",
                    headers: {},
                    withCredentials: true,
                    data: {
                        Comment: {
                            PostId: SpecificPost._id,
                            CommentBody: TextFieldValue,
                            CommentOwnerName: `${User.UserName} ${User.FamilyName}`,
                            CommentOwnerId: User._id,
                            CommentOwnerImage: User.ProfilePicture,
                            CommentImage: Photo,
                            PostOwnerId: SpecificPost.PostOwnerId,
                            CommentsRePlayTo: ReplayTo,
                            CommentsRePlayToId: ReplayToId
                        },
                        Data: {
                            UserName: User.UserName,
                            FamilyName: User.FamilyName,
                            PostBody: SpecificPost.PostBody,
                            UserId: User._id
                        }
                    }
                }

                ).then(() => {
                    var comments = [...Comments]
                    var post = SpecificPost

                    comments.push({
                        _id: User._id,
                        CommentBody: TextFieldValue,
                        CommentOwnerName: `${User.UserName} ${User.FamilyName}`,
                        CommentOwnerId: User._id,
                        CommentImage: Photo,
                        CommentOwnerImage: User.ProfilePicture,
                        createdAt: Date.now(),
                        CommentsRePlayTo: ReplayTo
                    })

                    setComments(comments)
                    post.CommentsCounter + 1

                    setSpecificPost({
                        ...post,
                        PostBody: post.PostBody,
                        PostOwnerId: post.PostOwnerId,
                        PostOwnerName: post.PostOwnerName,
                        PostOwnerImage: post.PostOwnerImage,
                        link: post.link,
                        PostImage: post.PostImage,
                        PostFrom: post.PostFrom,
                        CollectionName: post.CollectionName,
                        CollectionId: post.CollectionId,
                        CollectionOwnerId: post.CollectionOwnerId,
                        PrivateShareUsersIds: post.PrivateShareUsersIds,
                        CommentsCounter: post.CommentsCounter + 1
                    })

                    RestTextFelidValueReload()
                    setTextFieldValue("")
                    setReplayTo("")
                    setReplayToId("")
                })
            }
        } catch (e) {
            console.log(e)
            window.alert("something went wrong")
        } finally {
            setIsLoading(false)
        }

    }
    return { onChange, CommentSubmitHandler, TextFieldValue, isLoading, Photo, setPhoto }
}
