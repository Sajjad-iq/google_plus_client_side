import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalContext'
import { UserData } from '../LocalStorage/UserData'

export const SetUserInfoAndRedirect = () => {

    const Navigate = useNavigate()
    let User = UserData()

    const RefreshUserAccount = async () => {
        try {
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/SignIn/Refresh",
                headers: {},
                data: {
                    Email: User.Email,
                    Password: User.Password
                }
            }
            ).then(res => {
                if (res.data) {
                    localStorage.setItem('User', JSON.stringify(res.data) || "");
                } else {
                    let user = User
                    user.Email = ""
                    user.Password = ""
                    localStorage.setItem('User', JSON.stringify(user) || "");
                    Navigate("/SignIn")
                }

            })
        } catch (e) {
            Navigate("/SignIn")
        }

    }


    return { RefreshUserAccount }
}
