import axios from 'axios'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const FetchAllUsers = (PostsCount: number, setResponse: any, Response: any) => {

    const [Loading, setLoading] = useState(false)
    const { SelectedButton, User } = useContext(GlobalContext)
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
                    SelectedButton: SelectedButton,
                    UserFollowing: User.Following
                }
            }
            ).then(async (e: any) => {

                if (SelectedButton === 0) {
                    var users = [...Response]
                    var newUsers = users.concat(e.data.ResponseUsers)
                    setResponse(newUsers)
                } else if (SelectedButton === 1) {
                    setResponse(e.data.ResponseUsers)
                    console.log(e.data.ResponseUsers)
                }
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
