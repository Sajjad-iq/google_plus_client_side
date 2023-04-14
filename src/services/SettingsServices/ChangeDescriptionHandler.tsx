import React, { ChangeEvent, useContext, useState } from 'react'
import { UserData } from '../LocalStorage/UserData'

export const ChangeDescriptionHandler = (setIsActive: any) => {

    const [DescriptionInputValue, setDescriptionInputValue] = useState("")
    let User = UserData()

    const OnDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescriptionInputValue(e.target.value)
    }

    const onSave = async () => {
        User.Description = DescriptionInputValue
        localStorage.setItem('User', JSON.stringify(User) || "");
        setIsActive(false)
    }
    return { onSave, OnDescriptionChange }
}


