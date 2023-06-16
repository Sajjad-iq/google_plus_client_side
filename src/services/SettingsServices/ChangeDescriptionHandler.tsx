import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const ChangeDescriptionHandler = (setIsActive: any) => {

    const [DescriptionInputValue, setDescriptionInputValue] = useState("")
    const { setUser, User } = useContext(GlobalContext)

    const OnDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescriptionInputValue(e.target.value)
    }

    const onSave = async () => {
        User.Description = DescriptionInputValue
        setUser(User)
        setIsActive(false)
    }
    return { onSave, OnDescriptionChange }
}


