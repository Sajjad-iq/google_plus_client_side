import axios from 'axios'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { UserData } from '../LocalStorage/UserData'

export const FetchComments = (PostsCount: number) => {

    const [Loading, setLoading] = useState(false)
    const [StopFetching, setStopFetching] = useState(false)
    const { SpecificPost, setSpecificPostComments, SpecificPostComments } = useContext(GlobalContext)
    const User = UserData()

    const FetchCommentsHandler = async () => {
        try {
            setLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/GetComments",
                headers: {},
                data: {
                    PostId: SpecificPost._id,
                    PayloadCount: PostsCount,
                    AccessControlId: User._id,
                    AccessControlPassword: User.Password
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
