import axios from 'axios';
import { useState } from 'react'

export const AddMentionServices = () => {

    const [MentionResponse, setMentionResponse] = useState([])
    const [isMentionLoading, setIsLoading] = useState(false)



    const FindMentionedUserHandler = async (text: string) => {


        try {
            setIsLoading(true)

            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/Mention",
                headers: {},
                withCredentials: true,
                data: {
                    mention: text
                }
            }

            ).then((e) => {
                setMentionResponse(e.data)
            })
        } catch (e) {
            console.log(e)
            window.alert("something went wrong")
        } finally {
            setIsLoading(false)
        }

    }
    return { FindMentionedUserHandler, isMentionLoading, MentionResponse }
}
