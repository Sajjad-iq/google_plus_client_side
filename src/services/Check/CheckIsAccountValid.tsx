import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalContext'
import axios from 'axios'

export const CheckIsAccountValid = () => {

    const Navigate = useNavigate()
    const { setUser } = useContext(GlobalContext)
    const [Loading, setLoading] = useState(false)

    const FirstLoad = async () => {
        try {
            setLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Profile/firstLoad",
                headers: {},
                withCredentials: true,
                data: {}
            }
            ).then((e: any) => {
                setUser(e.data)
                Navigate("/")

            })
        }

        catch (e: any) {
            Navigate("/SignIn")
        }

        finally {
            setLoading(false)
        }
    }
    return { FirstLoad, Loading }
}
