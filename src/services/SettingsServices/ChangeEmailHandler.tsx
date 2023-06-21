import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

export const ChangeEmailHandler = () => {

  const [IsEmailValid, setIsEmailValid] = useState(true)
  const { setUser, User } = useContext(GlobalContext)

  const OnEmailChange = (e: ChangeEvent<HTMLInputElement>) => {

    let Regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const Valid = Regex.test(e.target.value)
    setIsEmailValid(Valid)
    User.Email = e.target.value
    setUser(User)
  }



  return { OnEmailChange, IsEmailValid }
}
