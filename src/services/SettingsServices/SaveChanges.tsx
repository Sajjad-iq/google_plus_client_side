import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserData } from '../LocalStorage/UserData'

export const SaveChanges = (setIsLoading: any) => {

    const Navigate = useNavigate()

    const Save = async () => {

        const User = UserData()

        try {
            setIsLoading(true)
            await axios({
                method: 'put',
                url: import.meta.env.VITE_BACKEND_URL + `/api/Profile/edit`,
                headers: {},
                data: {
                    User,
                    AccessControlId: User._id,
                    AccessControlPassword: User.Password
                }
            }
            ).then((e) => {
                Navigate("/")
            }
            )

        } catch (e) {
            console.log(e)
        }
        finally {
            setIsLoading(false)

        }

    }

    return { Save }
}
