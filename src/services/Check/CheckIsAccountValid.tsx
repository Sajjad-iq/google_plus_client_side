import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalContext'
import { UserData, UserDef } from '../LocalStorage/UserData'

export const CheckIsAccountValid = () => {

    const Navigate = useNavigate()
    let User = UserData()
    const { socket } = useContext(GlobalContext)

    const CheckUserAccount = async () => {

        await socket.emit("newUser", User._id);
        await socket.on("validate_user", (data: any) => {
            if (data.Check) localStorage.setItem('User', JSON.stringify(data.user))
            else {
                localStorage.setItem('User', JSON.stringify(UserDef));
                Navigate("/SignIn")
            }
        })

    }

    return { CheckUserAccount }
}
