import axios from 'axios'
import { useState } from 'react'
import { NotificationDef } from '../../Context/GlobalContext'

export const FetchNotifications = () => {


    const [Loading, setLoading] = useState(false)
    const [Response, setResponse] = useState<any>([NotificationDef])

    async function FetchHandler() {

        try {
            setLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + `/api/Notifications/`,
                withCredentials: true,
            }
            ).then((e: any) => {
                setResponse(e.data)
            })
        }

        catch (e: any) {
            window.alert("something went wrong")
        }

        finally {
            setLoading(false)
        }


    }

    return { FetchHandler, Response, Loading }

}
