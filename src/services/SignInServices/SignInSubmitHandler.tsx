import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from "../../Context/GlobalContext";

export const SignInSubmitHandler = () => {

    const { SignInEmailInputValue, SignInPasswordInputValue, setSignInEmailAndPasswordValid, setIsAllSectionsFilledText } = useContext(AuthContext)
    const { setUser } = useContext(GlobalContext)
    const [isLoading, setIsLoading] = useState(false)

    const Navigate = useNavigate()


    const SignInSubmit = async () => {
        if (SignInEmailInputValue !== "" && SignInPasswordInputValue !== "") {
            try {
                setIsLoading(true)
                await axios({
                    method: 'post',
                    url: import.meta.env.VITE_BACKEND_URL + "/api/SignIn",
                    headers: {},
                    withCredentials: true,
                    data: {
                        Email: SignInEmailInputValue,
                        Password: SignInPasswordInputValue
                    }
                }
                ).then(res => {
                    setUser(res.data.User)
                    Navigate('/')
                })
            } catch (e: any) {
                console.log(e)
                setSignInEmailAndPasswordValid(false)
                setIsAllSectionsFilledText(e.response.data)
            }
            finally {
                setIsLoading(false)
            }
        }

    }
    return { SignInSubmit, isLoading }
}
