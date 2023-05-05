import axios from 'axios'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { UserData } from '../LocalStorage/UserData'

export const FetchSpecificPost = () => {

    const [Loading, setLoading] = useState(false)
    const { setSpecificPost } = useContext(GlobalContext)
    const User = UserData()

    const FetchSpecificPostHandler = async (id: string) => {
        try {
            setLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/Post",
                headers: {},
                data: {
                    PostId: id,
                    AccessControlId: User._id,
                    AccessControlPassword: User.Password
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
