import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { UserData } from '../LocalStorage/UserData';

export const DeletePost = () => {

    const User = UserData()
    const Navigate = useNavigate()

    const DeletePostHandler = async (e: any) => {
        try {
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/Delete",
                headers: {},
                withCredentials: true,
                data: {
                    PostId: e._id,
                    UserId: User._id,
                    PostOwnerId: e.PostOwnerId,
                }
            }
            ).then(() => {
                Navigate("/")
            })
        } catch (e) {
            console.log(e)
            window.alert("something went wrong")
        }
    }

    return { DeletePostHandler }
}
