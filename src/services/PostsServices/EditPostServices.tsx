import axios from 'axios'
import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { UserData } from '../LocalStorage/UserData'



export const EditPostServices = (Data: any, WindowClosing: any) => {

  const User = UserData()
  const [Url, setUrl] = useState(Data.Link)
  const [Photo, setPhoto] = useState<any>(Data.PostImage)
  const [Textfield, setTextFelid] = useState<string>(Data.PostBody)
  const [isLoading, setIsLoading] = useState(false)

  const { setSpecificPost, SpecificPost } = useContext(GlobalContext)
  const TextChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFelid(e.target.value)

  const SubmitPostHandler = async () => {
    if (Textfield !== "") {
      try {
        setIsLoading(true)
        await axios({
          method: 'post',
          url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/Edit",
          headers: {},
          withCredentials: true,
          data: {
            PostId: Data._id,
            PostBody: Textfield,
            PostOwnerId: SpecificPost.PostOwnerId,
            PostOwnerName: SpecificPost.PostOwnerName,
            PostImage: Photo,
            PostOwnerImage: SpecificPost.PostOwnerImage,
            link: Url
          }
        }
        ).then(() => {
          let post = SpecificPost
          post.PostId = Data._id
          post.PostBody = Textfield
          post.PostOwnerId = User._id
          post.PostOwnerName = `${User.UserName} ${User.FamilyName}`
          post.PostImage = Photo
          post.PostOwnerImage = User.ProfilePicture
          post.link = Url

          WindowClosing()
          setSpecificPost(post)
        })
      }
      catch (e: any) {
        window.alert("something went wrong")
      }
      finally {
        setIsLoading(false)
        setTextFelid("")
        setPhoto("")
        setUrl("")
      }
    }
  }

  return { setUrl, Textfield, Url, Photo, isLoading, TextChange, setPhoto, SubmitPostHandler }
}



