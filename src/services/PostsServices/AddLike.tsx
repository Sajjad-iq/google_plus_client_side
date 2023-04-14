import axios from 'axios'
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';

export const AddLike = () => {

    let User = UserData()
    const { SpecificPost, setSpecificPost } = useContext(GlobalContext)



    const AddLikeHandler = async (e: any) => {

        try {
            await axios({
                method: 'put',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/AddLike",
                headers: {},
                data: {
                    UserId: User._id,
                    PostId: e._id,
                    PostOwnerId: e.PostOwnerId,
                    Operation: e.Likes.includes(User._id) ? "delete" : "add",

                    NotificationsObj: {
                        NotificationName: `${User.UserName} ${User.FamilyName}`,
                        NotificationBody: e.LikesCounter > 0 ? `add like to your post with ${SpecificPost.LikesCounter} more. '${e.PostBody}'` : `add like to your post. '${e.PostBody}'`,
                        NotificationFromId: e._id,
                        NotificationFrom: "posts",
                        NotificationOwnerImage: User.ProfilePicture
                    }
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
