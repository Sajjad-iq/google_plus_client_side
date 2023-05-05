import axios from 'axios'
import React, { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalContext'
import { UserData } from '../LocalStorage/UserData'



export const EditPostServices = (Data: any, WindowClosing: any) => {

  const User = UserData()
  const [Url, setUrl] = useState(Data.Link)
  const [Photo, setPhoto] = useState<any>(Data.PostImage)
  const [Textfield, setTextFelid] = useState<string>(Data.PostBody)
  const [isLoading, setIsLoading] = useState(false)

  const { setErrMessage, setSpecificPost, SpecificPost } = useContext(GlobalContext)
  const Navigate = useNavigate()


  const TextChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFelid(e.target.value)

  const handleImageUpload = async (e: ChangeEvent<any>) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPhoto(base64)
  }

  const SubmitPostHandler = async () => {
    if (Textfield !== "") {
      try {
        setIsLoading(true)
        await axios({
          method: 'post',
          url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/Edit",
          headers: {},
          data: {
            PostId: Data._id,
            PostBody: Textfield,
            PostOwnerId: SpecificPost.PostOwnerId,
            PostOwnerName: SpecificPost.PostOwnerName,
            PostImage: Photo,
            PostOwnerImage: SpecificPost.PostOwnerImage,
            link: Url,
            AccessControl: User._id,
            AccessControlPassword: User.Password

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
          setIsLoading(false)
        })
      } catch (e: any) {
        setErrMessage(e.message)
        Navigate("/Error")
      } finally {
        setIsLoading(false)
        setTextFelid("")
        setPhoto("")
        setUrl("")
      }
    }
  }

  return { setUrl, Textfield, Url, Photo, isLoading, TextChange, handleImageUpload, SubmitPostHandler }
}



function convertToBase64(file: any) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })

}
