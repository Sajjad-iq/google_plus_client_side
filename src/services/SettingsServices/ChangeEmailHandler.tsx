import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const ChangeEmailHandler = (setIsActive: any) => {

  const [IsEmailValid, setIsEmailValid] = useState(true)
  const [EmailInputValue, setEmailInputValue] = useState("")
  const { setUser, User } = useContext(GlobalContext)

  const OnEmailChange = (e: ChangeEvent<HTMLInputElement>) => {

    let Regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const Valid = Regex.test(e.target.value)
    setIsEmailValid(Valid)
    setEmailInputValue(e.target.value)
  }

  const onSave = async () => {

    if (IsEmailValid) {
      if (EmailInputValue !== "") {
        User.Email = EmailInputValue
        setUser(User)
        setIsActive(false)
      }
    } else {
      setIsEmailValid(false)
    }
  }

  return { OnEmailChange, IsEmailValid, onSave }
}
