import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserData } from '../LocalStorage/UserData'

export const SaveChanges = (setIsLoading: any) => {

    const Navigate = useNavigate()

    const Save = async () => {
        let User = UserData()

        try {
            setIsLoading(true)
            await axios({
                method: 'put',
                url: import.meta.env.VITE_BACKEND_URL + `/api/Profile/${User._id}`,
                headers: {},
                data: {
                    User
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
