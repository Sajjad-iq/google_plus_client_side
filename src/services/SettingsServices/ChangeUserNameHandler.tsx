import { ChangeEvent, useContext, useState } from "react"
import { GlobalContext } from "../../Context/GlobalContext"


export const ChangeUserNameHandler = () => {

    const [IsUserNameValid, setIsUserNameValid] = useState(true)
    const [IsFamilyNameValid, setIsFamilyNameValid] = useState(true)
    const { setUser, User } = useContext(GlobalContext)

    const OnUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const Regex = /[^a-zA-Z1-9 \s]/g
        const Valid = Regex.test(e.target.value)

        if (!Valid) {
            User.UserName = e.target.value
            setUser(User)
            setIsUserNameValid(true)
        } else setIsUserNameValid(false)
    }


    const OnFamilyNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const Regex = /[^a-zA-Z1-9 \s]/g
        const Valid = Regex.test(e.target.value)
        if (!Valid) {
            User.FamilyName = e.target.value
            setUser(User)
            setIsFamilyNameValid(true)
        } else setIsFamilyNameValid(false)
    }


    return { OnUserNameChange, IsUserNameValid, OnFamilyNameChange, IsFamilyNameValid }
}
