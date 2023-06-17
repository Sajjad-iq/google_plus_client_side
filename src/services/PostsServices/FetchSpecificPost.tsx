import axios from 'axios'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const FetchSpecificPost = () => {

    const [Loading, setLoading] = useState(false)
    const { setSpecificPost, setSpecificPostComments } = useContext(GlobalContext)

    const FetchSpecificPostHandler = async (id: string, FromNotificationsPage: boolean = false, NotificationsData: any = {}) => {
        try {
            setLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/Post",
                headers: {},
                withCredentials: true,
                data: {
                    PostId: id,
                    setNotificationAsRead: FromNotificationsPage,
                    NotificationsData: NotificationsData
                }
            }
            ).then((e: any) => {
                setSpecificPost(e.data)
                setSpecificPostComments([])
            })
        } catch (e) {
            console.log(e)
            window.alert("something went wrong")
        } finally {
            setLoading(false)
        }
    }
    return { FetchSpecificPostHandler, Loading }
}
