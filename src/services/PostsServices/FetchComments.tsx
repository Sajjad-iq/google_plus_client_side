import axios from 'axios'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const FetchComments = (PostsCount: number) => {

    const [Loading, setLoading] = useState(false)
    const [StopFetching, setStopFetching] = useState(false)
    const { SpecificPost, setSpecificPostComments, SpecificPostComments } = useContext(GlobalContext)

    const FetchCommentsHandler = async () => {
        try {
            setLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/GetComments",
                headers: {},
                data: {
                    PostId: SpecificPost._id,
                    PayloadCount: PostsCount
                }
            }
            ).then(async (e: any) => {
                let newComments = SpecificPostComments.concat(e.data.ResponseComments)
                setSpecificPostComments(newComments)
                setStopFetching(e.data.StopFetching)
            })

        } catch (e: any) {
            console.log(e)
        }
        finally {
            setLoading(false)
        }
    }
    return { FetchCommentsHandler, StopFetching, Loading }
}
