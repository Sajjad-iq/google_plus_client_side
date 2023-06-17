import axios from 'axios'
import { useState } from 'react'
import { FindUserDef } from '../../Context/GlobalContext'

export const FetchAllUsers = (PostsCount: number) => {

    const [Loading, setLoading] = useState(false)
    const [Response, setResponse] = useState([FindUserDef])

    const [StopFetching, setStopFetching] = useState(false)

    const FetchAllUsersHandler = async () => {
        try {
            setLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/People/Get",
                headers: {},
                withCredentials: true,

                data: {
                    PayloadCount: PostsCount,
                }
            }
            ).then(async (e: any) => {
                let newUsers = Response.concat(e.data.ResponseUsers)
                setResponse(newUsers)
                setStopFetching(e.data.StopFetching)
            })
        }

        catch (e: any) {
            window.alert("something went wrong")
        }

        finally {
            setLoading(false)
        }
    }

    return { FetchAllUsersHandler, StopFetching, Response, Loading }

}
