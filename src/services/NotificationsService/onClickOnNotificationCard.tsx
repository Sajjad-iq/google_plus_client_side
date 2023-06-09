import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SetFindUser } from '../PeopleServices/SetFindUser'
import { FetchSpecificPost } from '../PostsServices/FetchSpecificPost'

export const onClickOnNotificationCard = () => {

    const { SetFindUserHandler } = SetFindUser()
    const { FetchSpecificPostHandler } = FetchSpecificPost()
    const Navigate = useNavigate()
    const [NotificationsLoading, setNotificationsLoading] = useState(false)

    const ClickOnNotificationCardHandler = async (data: any) => {

        if (data.NotificationFrom === "people") {
            try {
                setNotificationsLoading(true)
                await SetFindUserHandler(data.NotificationOnClickTargetId, true, data)
            } catch (e: any) {
                window.alert("something went wrong")
            }
            finally {
                setNotificationsLoading(false)
            }
        }

        else if (data.NotificationFrom === "posts") {
            try {
                setNotificationsLoading(true)
                await FetchSpecificPostHandler(data.NotificationOnClickTargetId, true, data)
                Navigate('/Posts')

            } catch (e: any) {
                window.alert("something went wrong")
            }
            finally {
                setNotificationsLoading(false)
            }
        }
    }
    return { ClickOnNotificationCardHandler, NotificationsLoading }
}
