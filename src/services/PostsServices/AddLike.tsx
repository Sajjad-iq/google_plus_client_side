import axios from 'axios'
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';

export const AddLike = () => {

    let User = UserData()
    const { setSpecificPost } = useContext(GlobalContext)



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
                    PostBody: e.PostBody,
                    UserName: User.UserName,
                    FamilyName: User.FamilyName,
                    NotificationFrom: "posts",
                    NotificationOwnerImage: User.ProfilePicture
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
