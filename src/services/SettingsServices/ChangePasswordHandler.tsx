import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const ChangePasswordHandler = () => {

    const [IsPasswordValid, setIsPasswordValid] = useState(true)
    const [IsAllSectionsFilled, setIsAllSectionsFilled] = useState(true)
    const [PasswordInputValue, setPasswordInputValue] = useState("")
    const [ConformPasswordInputValue, setConformPasswordInputValue] = useState("")
    const { User, setUser } = useContext(GlobalContext)
    const [IsChangeLoading, setIsLoading] = useState(false)
    const Navigate = useNavigate()

    const OnPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordInputValue(e.target.value)
    }
    const OnConformPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConformPasswordInputValue(e.target.value)
    }

    const onSubmit = async () => {

        if (IsPasswordValid && PasswordInputValue !== "") {
            try {
                setIsLoading(true)
                await axios({
                    method: 'post',
                    url: import.meta.env.VITE_BACKEND_URL + `/api/Profile/ChangePassword`,
                    headers: {},
                    withCredentials: true,
                    data: {
                        operation: "ChangePassword",
                        Password: PasswordInputValue
                    }
                }
                ).then((e) => {
                    setUser(e.data)
                    Navigate("/")
                }
                )

            } catch (e) {
                console.log(e)
                window.alert("something went wrong")
            }
            finally {
                setIsLoading(false)
            }

        } else {
            setIsAllSectionsFilled(false)
        }
    }


    return { ConformPasswordInputValue, PasswordInputValue, setIsPasswordValid, OnPasswordChange, OnConformPasswordChange, onSubmit, IsPasswordValid, IsAllSectionsFilled, IsChangeLoading }
}
