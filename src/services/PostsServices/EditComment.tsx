import axios from 'axios'
import React, { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalContext'
import { UserData } from '../LocalStorage/UserData'



export const EditComment = (Data: any) => {

    const User = UserData()
    const [Textfield, setTextFelid] = useState<string>(Data.CommentBody)
    const [isLoading, setIsLoading] = useState(false)
    const { setErrMessage, SpecificPostComments, SpecificPost } = useContext(GlobalContext)
    const Navigate = useNavigate()

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



