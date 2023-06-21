import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const SaveChanges = (setIsLoading: any) => {

    const Navigate = useNavigate()
    const { User } = useContext(GlobalContext)

    const Save = async () => {


        try {
            setIsLoading(true)
            await axios({
                method: 'put',
                url: import.meta.env.VITE_BACKEND_URL + `/api/Profile/edit`,
                headers: {},
                withCredentials: true,
                data: {
                    User
                }
            }
            ).then((e) => {
                Navigate("/")
            }
            )

        } catch (e: any) {
            console.log(e)
            window.alert(`${e.response.data.joiMessage}`)
        }
        finally {
            setIsLoading(false)

        }

    }

    return { Save }
}
