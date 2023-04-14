import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext, def, NotificationDef } from '../../Context/GlobalContext'
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

                const newData = []

                for (let i = 0; i < e.data.length; i++) {
                    let IsUniq = true
                    for (let j = i; j < e.data.length - 1; j++) {
                        if (
                            e.data[i].NotificationName == e.data[j + 1].NotificationName
                            &&
                            e.data[i].NotificationBody == e.data[j + 1].NotificationBody
                            &&
                            e.data[i].NotificationFromId == e.data[j + 1].NotificationFromId
                            &&
                            e.data[i].NotificationFrom == e.data[j + 1].NotificationFrom
                        ) {
                            IsUniq = false
                        }
                    }
                    IsUniq ? newData.push(e.data[i]) : null
                }
                setResponse(newData)
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
