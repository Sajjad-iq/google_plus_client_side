import axios from 'axios';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';

export const AddOrRemoveFollow = () => {

    let User = UserData()
    let { PeopleUser, setPeopleUser } = useContext(GlobalContext)
    const [IsLoading, setIsLoading] = useState(false)

    const AddOrRemoveFollowHandler = async () => {

        const IsIncludes = PeopleUser.Followers.includes(User._id)

        try {
            setIsLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/People/AddFollow",
                headers: {},
                withCredentials: true,

                data: {
                    FindUserId: PeopleUser._id,
                    OwnerId: User._id,
                    operation: IsIncludes ? "remove" : "add",
                    UserName: User.UserName,
                    FamilyName: User.FamilyName,
                    OwnerImage: User.ProfilePicture
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
            window.alert("something went wrong")
        } finally {
            setIsLoading(false)
        }
    }
    return { AddOrRemoveFollowHandler, IsLoading }
}
