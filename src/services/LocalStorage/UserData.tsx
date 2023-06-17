import { useContext } from "react"
import { GlobalContext } from "../../Context/GlobalContext"

export const UserDef = {
  _id: "",
  UserName: "",
  FamilyName: "",
  ProfilePicture: "",
  CoverPicture: "",
  Description: "",
  Email: "",
  Password: "",
  Followers: [],
}



export const UserData = () => {
  const { User } = useContext(GlobalContext)

  if (User) return User
  else return UserDef
}
