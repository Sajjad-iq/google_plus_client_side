import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const ChangeDescriptionHandler = () => {

    const { setUser, User } = useContext(GlobalContext)
    const [value, setValue] = useState("")
    const OnDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        User.Description = e.target.value
        setValue(e.target.value)
        setUser(User)
    }
    return { OnDescriptionChange, value }
}


