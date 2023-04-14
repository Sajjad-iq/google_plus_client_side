import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from 'react-router-dom';

export const SignInSubmitHandler = () => {

    const { SignInEmailInputValue, SignInPasswordInputValue, setSignInEmailAndPasswordValid, setIsAllSectionsFilledText } = useContext(AuthContext)
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
                    data: {
                        Email: SignInEmailInputValue,
                        Password: SignInPasswordInputValue
                    }
                }
                ).then(res => {
                    localStorage.setItem('User', JSON.stringify(res.data.User));
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
