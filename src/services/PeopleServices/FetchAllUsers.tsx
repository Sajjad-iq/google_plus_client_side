import axios from 'axios'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const FetchAllUsers = (UsersCount: number, setResponse: any, Response: any, FindMoreFollowing: boolean) => {

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
                    PayloadCount: UsersCount,
                    SelectedButton: SelectedButton,
                    UserFollowing: User.Following,
                    UserFollowers: User.Followers,
                    FindMoreFollowing: FindMoreFollowing
                }
            }
            ).then(async (e: any) => {

                if (SelectedButton === 0 || SelectedButton === 2) {

                    if (UsersCount === 0) {
                        setResponse(e.data.ResponseUsers)
                    } else {
                        var users = [...Response]
                        var newUsers = users.concat(e.data.ResponseUsers)
                        setResponse(newUsers)
                    }
                } else if (SelectedButton === 1 && !FindMoreFollowing) setResponse(e.data.ResponseUsers)
                else if (SelectedButton === 1 && FindMoreFollowing) {
                    var users = [...Response]
                    var newUsers = users.concat(e.data.ResponseUsers)
                    if (e.data.ResponseUsers.length !== 0 ) setResponse(newUsers)
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
