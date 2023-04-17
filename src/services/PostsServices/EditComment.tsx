import axios from 'axios'
import React, { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalContext'



export const EditComment = (Data: any) => {

    const [Textfield, setTextFelid] = useState<string>(Data.CommentBody)
    const { setErrMessage, SpecificPostComments } = useContext(GlobalContext)
    const Navigate = useNavigate()

    const TextChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFelid(e.target.value)


    const SubmitCommentHandler = async () => {
        if (Textfield !== "") {
            try {
                await axios({
                    method: 'post',
                    url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/EditComment",
                    data: {
                        commentBody: Textfield,
                        comment: Data
                    }
                },
                ).then(() => {
                    let comments = SpecificPostComments
                    for (let i = 0; i < comments.length; i++) {
                        if (comments[i]._id === Data._id) comments[i].CommentBody = Textfield
                    }
                })
            } catch (e: any) {
                setErrMessage(e.response.data)
                Navigate("/Error")
            }
        }
    }

    return { Textfield, TextChange, SubmitCommentHandler }
}



