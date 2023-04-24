import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext, NotificationDef } from '../../Context/GlobalContext'
import { UserData } from '../LocalStorage/UserData'

export const FetchNotifications = () => {


    const [Loading, setLoading] = useState(false)
    const [Response, setResponse] = useState<any>([NotificationDef])
    const Navigate = useNavigate()
    const { setErrMessage } = useContext(GlobalContext)
    let User = UserData()

    async function FetchHandler() {

        try {
            setLoading(true)
            await axios({
                method: 'get',
                url: import.meta.env.VITE_BACKEND_URL + `/api/Notifications/${User._id}`,
            }
            ).then((e: any) => {
                setResponse(e.data)
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

    return { FetchHandler, Response, Loading }

}
