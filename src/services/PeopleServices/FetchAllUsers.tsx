import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FindUserDef, GlobalContext } from '../../Context/GlobalContext'
import { UserData } from '../LocalStorage/UserData'

export const FetchAllUsers = (PostsCount: number) => {

    const [Loading, setLoading] = useState(false)
    const [Response, setResponse] = useState([FindUserDef])
    let User = UserData()

    const [StopFetching, setStopFetching] = useState(false)
    const Navigate = useNavigate()
    const { setErrMessage } = useContext(GlobalContext)

    const FetchAllUsersHandler = async () => {
        try {
            setLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/People/Get",
                headers: {},
                data: {
                    PayloadCount: PostsCount,
                    owner: User._id
                }
            }
            ).then(async (e: any) => {
                let newUsers = Response.concat(e.data.ResponseUsers)
                setResponse(newUsers)
                setStopFetching(e.data.StopFetching)
            })
        }

        catch (e: any) {
            setErrMessage(e.message)
            Navigate("/Error")
        }

        finally {
            setLoading(false)
        }
    }

    return { FetchAllUsersHandler, StopFetching, Response, Loading }

}
