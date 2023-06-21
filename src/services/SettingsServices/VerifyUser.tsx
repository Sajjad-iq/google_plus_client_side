import axios from 'axios'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const VerifyUsers = (setIsVerify: any) => {

    const [IsLoading, setIsLoading] = useState(false)
    const { User } = useContext(GlobalContext)

    const VerifyUser = async (password: string) => {

        try {
            setIsLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + `/api/Profile/ChangePassword`,
                headers: {},
                withCredentials: true,
                data: {
                    operation: "verify",
                    Password: password,
                    CurrentPassword: User.Password
                }
            }
            ).then((e) => {
                setIsVerify(e.data)
            }
            )

        } catch (e) {
            console.log(e)
            window.alert("something went wrong")
        }
        finally {
            setIsLoading(false)

        }

    }

    return { VerifyUser, IsLoading }
}
