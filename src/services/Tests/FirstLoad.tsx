import { useNavigate } from 'react-router-dom'
import { UserDef } from '../LocalStorage/UserData'



export const FirstLoad = () => {
  const Navigate = useNavigate()

  const checkStorage = (key: string) => {
    let User = JSON.parse(localStorage.getItem(key) || JSON.stringify(UserDef))
    if (User && User.Email == "") Navigate("/SignIn")
  }

  return checkStorage
}
