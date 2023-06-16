import axios from 'axios';
import { ChangeEvent, useContext, useState } from 'react'
import { CommentsContext } from '../../Context/CommentsContext';

export const AddMentionServices = () => {

    const [TextFieldValue, setTextFieldValue] = useState("")
    const [MentionResponse, setMentionResponse] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { ReplayTo, setReplayTo, ReplayToId, setReplayToId } = useContext(CommentsContext)


    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFieldValue(e.target.value)

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
    return { onChange, FindMentionedUserHandler, TextFieldValue, isLoading, MentionResponse }
}
