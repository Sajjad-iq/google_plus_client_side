import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';

export const AddOrRemoveFollow = () => {

    let User = UserData()
    let { PeopleUser, setPeopleUser, setErrMessage, } = useContext(GlobalContext)
    const Navigate = useNavigate()
    const [IsLoading, setIsLoading] = useState(false)

    const AddOrRemoveFollowHandler = async () => {

        try {
            setIsLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/People/AddFollow",
                headers: {},
                data: {
                    FindUserId: PeopleUser._id,
                    OwnerId: User._id,
                    operation: PeopleUser.Followers.includes(User._id) ? "remove" : "add",

                    NotificationsObj: {
                        NotificationName: `${User.UserName} ${User.FamilyName}`,
                        NotificationBody: `started following you.`,
                        NotificationFromId: User._id,
                        NotificationFrom: "people",
                        NotificationOwnerImage: User.ProfilePicture
                    }
                }
            }
            ).then(res => {
                let user = PeopleUser

                if (res.data === 1) {
                    user.Followers.push(User._id)
                    setPeopleUser(user)
                } else {
                    let index = user.Followers.indexOf(User._id);
                    user.Followers.splice(index, 1);
                    setPeopleUser(user)
                }
            })

        } catch (e: any) {
            setErrMessage(e.message)
            Navigate("/Error")
        } finally {
            setIsLoading(false)
        }
    }
    return { AddOrRemoveFollowHandler, IsLoading }
}
