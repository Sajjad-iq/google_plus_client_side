import axios from 'axios'
import { UserData } from '../LocalStorage/UserData';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

export const DeleteComments = () => {

    let User = UserData()
    const { SpecificPost, SpecificPostComments, setSpecificPost, setSpecificPostComments } = useContext(GlobalContext)

    const DeleteCommentsHandler = async (data: any) => {
        try {
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/DeleteComments",
                headers: {},
                data: {
                    PostId: SpecificPost._id,
                    UserId: User._id,
                    Comment: data,
                    CommentsCounter: SpecificPost.CommentsCounter - 1,
                }
            }
            ).then(async () => {

                let comments = SpecificPostComments
                let newComments = await comments.filter((e: any) => {
                    return e._id !== data._id
                })
                setSpecificPostComments(newComments)

                let post = SpecificPost
                post.CommentsCounter = post.CommentsCounter <= 0 ? 0 : post.CommentsCounter - 1

                setSpecificPost(post)
            })
        } catch (e) {
            console.log(e)
        }
    }

    return { DeleteCommentsHandler }
}
