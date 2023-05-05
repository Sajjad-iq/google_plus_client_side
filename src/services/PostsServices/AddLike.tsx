import axios from 'axios'
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';



export const AddLike = () => {

    const User = UserData()
    const { SpecificPost, setSpecificPost, socket } = useContext(GlobalContext)


    const AddLikeHandler = async (data: any) => {

        const IsIncludes = data.Likes.includes(User._id)
        !IsIncludes ? socket.emit("send_new_notification", data.PostOwnerId) : null


        try {

            await axios({
                method: 'put',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/AddLike",
                headers: {},
                data: {
                    UserId: User._id,
                    PostId: data._id,
                    PostOwnerId: data.PostOwnerId,
                    Operation: IsIncludes ? "delete" : "add",
                    PostBody: data.PostBody,
                    UserName: User.UserName,
                    FamilyName: User.FamilyName,
                    NotificationFrom: "posts",
                    NotificationOwnerImage: User.ProfilePicture,
                    AccessControlId: User._id,
                    AccessControlPassword: User.Password
                }
            }
            ).then((e) => {
                setSpecificPost(e.data)
            })
        } catch (e) {
            console.log(e)
        }
    }

    return { AddLikeHandler }
}
