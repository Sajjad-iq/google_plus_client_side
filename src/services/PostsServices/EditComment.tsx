import axios from 'axios'
import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'



export const EditComment = (Data: any) => {

    const [Textfield, setTextFelid] = useState<string>(Data.CommentBody)
    const [isLoading, setIsLoading] = useState(false)
    const { SpecificPostComments, SpecificPost } = useContext(GlobalContext)

    const TextChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFelid(e.target.value)


    const SubmitCommentHandler = async () => {
        if (Textfield !== "") {
            try {
                setIsLoading(true)
                await axios({
                    method: 'post',
                    url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/EditComment",
                    withCredentials: true,
                    data: {
                        commentBody: Textfield,
                        comment: Data,
                        postId: SpecificPost._id
                    }
                },
                ).then(() => {
                    let comments = SpecificPostComments
                    for (let i = 0; i < comments.length; i++) {
                        if (comments[i]._id === Data._id) comments[i].CommentBody = Textfield
                    }
                })
            } catch (e: any) {
                window.alert("something went wrong")
            } finally {
                setIsLoading(false)
            }
        }
    }

    return { Textfield, TextChange, SubmitCommentHandler, isLoading }
}



