import axios from 'axios'
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';



export const AddLike = () => {

    const User = UserData()
    const { SpecificPost, setSpecificPost } = useContext(GlobalContext)


    const AddLikeHandler = async (data: any) => {

        const IsIncludes = data.Likes.includes(User._id)

        try {

            await axios({
                method: 'put',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/AddLike",
                headers: {},
                withCredentials: true,
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
