import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalContext'
import { SetFindUser } from '../PeopleServices/SetFindUser'
import { FetchSpecificPost } from '../PostsServices/FetchSpecificPost'

export const onClickOnNotificationCard = () => {
    const { SetFindUserHandler } = SetFindUser()
    const { FetchSpecificPostHandler } = FetchSpecificPost()
    const Navigate = useNavigate()
    const [NotificationsLoading, setNotificationsLoading] = useState(false)
    const { setErrMessage } = useContext(GlobalContext)

    const ClickOnNotificationCardHandler = async (data: any) => {

        if (data.NotificationFrom === "people") {
            try {
                setNotificationsLoading(true)
                await SetFindUserHandler(data.NotificationFromId)
            } catch (e: any) {
                setErrMessage(e.message)
                Navigate("/Error")
            }
            finally {
                setNotificationsLoading(false)
            }
        } else if (data.NotificationFrom === "posts") {
            try {
                setNotificationsLoading(true)
                await FetchSpecificPostHandler(data.NotificationFromId)
                Navigate('/Posts')

            } catch (e: any) {
                setErrMessage(e.message)
                Navigate("/Error")
            }
            finally {
                setNotificationsLoading(false)
            }
        }
    }
    return { ClickOnNotificationCardHandler, NotificationsLoading }
}
