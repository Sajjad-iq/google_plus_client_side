import axios from 'axios'
import { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

export const SignUpHandler = () => {

    const {
        EmailInputValue,
        FamilyNameInputValue,
        UserNameInputValue,
        UserPasswordInputValue,
        IsUserNameValid,
        IsFamilyNameValid,
        IsEmailValid,
        IsConformPasswordValid,
        setIsEmailValid,
        setIsAllSectionsFilled,
        setIsAllSectionsFilledText
    } = useContext(AuthContext)

    const [isLoading, setIsLoading] = useState(false)
    const Navigate = useNavigate()


    const SignUpSubmit = async () => {
        if (IsUserNameValid && IsFamilyNameValid && IsEmailValid && IsConformPasswordValid) {

            if (UserNameInputValue !== "" && FamilyNameInputValue !== "" && EmailInputValue !== "" && UserPasswordInputValue !== "") {
                try {
                    setIsLoading(true)
                    await axios({
                        method: 'post',
                        url: import.meta.env.VITE_BACKEND_URL + "/api/SignUp",
                        headers: {},
                        data: {
                            UserName: UserNameInputValue,
                            FamilyName: FamilyNameInputValue,
                            Email: EmailInputValue,
                            Password: UserPasswordInputValue,
                        }
                    }
                    ).then(() => Navigate("/SignIn"))

                } catch (e: any) {
                    console.log(e)
                    setIsAllSectionsFilled(false)
                    setIsAllSectionsFilledText(e.response.data || "please make sure add a valid data")
                }
                finally {
                    setIsLoading(false)
                }

            } else setIsAllSectionsFilled(false)
        }
    }


    return { SignUpSubmit, isLoading }
}
