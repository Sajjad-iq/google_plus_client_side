import axios from 'axios';
import React, { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';

export const AddCommentServices = (RestTextFelidValueReload: any) => {

    let User = UserData()
    const [TextFieldValue, setTextFieldValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { SpecificPost, SpecificPostComments, setSpecificPostComments, setSpecificPost } = useContext(GlobalContext)

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFieldValue(e.target.value)

    const CommentSubmitHandler = async () => {



        try {
            setIsLoading(true)
            await axios({
                method: 'put',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/AddComment",
                headers: {},
                data: {
                    PostId: SpecificPost._id,
                    CommentBody: TextFieldValue,
                    CommentOwnerName: `${User.UserName} ${User.FamilyName}`,
                    CommentOwnerId: User._id,
                    CommentOwnerImage: User.ProfilePicture,
                    PostOwnerId: SpecificPost.PostOwnerId,
                    CommentsCounter: SpecificPost.CommentsCounter + 1,

                    NotificationsObj: {
                        NotificationName: `${User.UserName} ${User.FamilyName}`,
                        NotificationBody: SpecificPost.CommentsCounter > 1 ? `add comment to your post with ${SpecificPost.CommentsCounter} more. '${TextFieldValue}'` : `add comment to your post. '${TextFieldValue}'`,
                        NotificationFromId: SpecificPost._id,
                        NotificationFrom: "posts",
                        NotificationOwnerImage: User.ProfilePicture
                    }
                }
            }
            ).then((e) => {
                let comments = SpecificPostComments
                comments.push({
                    CommentBody: TextFieldValue,
                    CommentOwnerName: `${User.UserName} ${User.FamilyName}`,
                    CommentOwnerId: User._id,
                    CommentOwnerImage: User.ProfilePicture,
                    createdAt: Date.now()
                })

                let post = SpecificPost
                post.CommentsCounter = e.data + 1

                setSpecificPost(post)
                RestTextFelidValueReload()
                setTextFieldValue("")
                setSpecificPostComments(comments)
            })
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }

    }
    return { onChange, CommentSubmitHandler, TextFieldValue, isLoading }
}
