import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

export const BlockUser = () => {
    let { User, PeopleUser } = useContext(GlobalContext)


    const Navigate = useNavigate()

    const BlockUserHandler = async (Id: any) => {

        let blacklist = User.BlockedAccounts || []
        try {
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/People/BlockUser",
                withCredentials: true,
                headers: {},
                data: {
                    BlockedUserId: Id,
                    operation: blacklist.includes(PeopleUser._id) ? "remove" : "add"
                }
            }
            ).then(() => {
                Navigate("/")
            })
        }

        catch (e: any) {
            console.log(e)
            window.alert("something went wrong")
        }
    }
    return { BlockUserHandler }
}
