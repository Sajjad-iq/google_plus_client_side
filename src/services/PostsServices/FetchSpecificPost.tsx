import axios from 'axios'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const FetchSpecificPost = () => {

    const [Loading, setLoading] = useState(false)
    const { setSpecificPost } = useContext(GlobalContext)

    const FetchSpecificPostHandler = async (id: string) => {
        try {
            setLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/Post",
                headers: {},
                data: {
                    PostId: id
                }
            }
            ).then((e: any) => {
                setSpecificPost(e.data)
            })
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }
    return { FetchSpecificPostHandler, Loading }
}
