import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';

export const SetFindUser = () => {

    const [FindUserLoading, setFindUserLoading] = useState(false)
    const [UserId, setUserId] = useState("")
    const Navigate = useNavigate()
    let { setPeopleUser } = useContext(GlobalContext)
    const User = UserData()

    const SetFindUserHandler = async (Id: any, FromNotificationsPage: boolean = false, NotificationsData: any = {}) => {


        try {
            setFindUserLoading(true)
            setUserId(Id)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/People/",
                withCredentials: true,

                headers: {},
                data: {
                    id: Id,
                    setNotificationAsRead: FromNotificationsPage,
                    NotificationsData: NotificationsData
                }
            }
            ).then(async (e: any) => {
                setPeopleUser(e.data)
                if (e.data._id === User._id) {
                    Navigate("/Profile")
                } else {
                    Navigate("/People/Profile")
                }
            })
        }

        catch (e: any) {
            window.alert("something went wrong")
        }

        finally {
            setFindUserLoading(false)
        }
    }
    return { SetFindUserHandler, FindUserLoading, UserId }
}
