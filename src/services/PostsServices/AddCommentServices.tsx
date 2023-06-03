import axios from 'axios';
import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';
import { CommentsContext } from '../../Context/CommentsContext';

export const AddCommentServices = (RestTextFelidValueReload: any) => {

    const User = UserData()
    const [TextFieldValue, setTextFieldValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { SpecificPost, SpecificPostComments } = useContext(GlobalContext)
    const { ReplayTo, setReplayTo, ReplayToId, setReplayToId } = useContext(CommentsContext)

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFieldValue(e.target.value)

    const CommentSubmitHandler = async () => {


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
                            PostOwnerId: SpecificPost.PostOwnerId,
                            CommentsCounter: SpecificPost.CommentsCounter + 1,
                            CommentsRePlayTo: ReplayTo,
                            CommentsRePlayToId: ReplayToId
                        },
                        Data: {
                            UserName: User.UserName,
                            FamilyName: User.FamilyName,
                            PostBody: SpecificPost.PostBody
                        },
                    }
                }

                ).then((e) => {
                    SpecificPostComments.push({
                        CommentBody: TextFieldValue,
                        CommentOwnerName: `${User.UserName} ${User.FamilyName}`,
                        CommentOwnerId: User._id,
                        CommentOwnerImage: User.ProfilePicture,
                        createdAt: Date.now(),
                        CommentsRePlayTo: ReplayTo
                    })

                    SpecificPost.CommentsCounter = e.data + 1

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
    return { onChange, CommentSubmitHandler, TextFieldValue, isLoading }
}
