import axios from 'axios'
import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import { UserData } from '../LocalStorage/UserData';

export const AddPost = () => {

    let User = UserData()
    const [Url, setUrl] = useState("")
    const [Photo, setPhoto] = useState<any>("")
    const [Textfield, setTextFelid] = useState<string>("")
    const [isLoading, setIsLoading] = useState(false)

    const { setErrMessage } = useContext(GlobalContext)
    const Navigate = useNavigate()


    const TextChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextFelid(e.target.value)

    const handleImageUpload = async (e: ChangeEvent<any>) => {
        const file = e.target.files[0] || null;
        if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/gif") {
            const base64 = await convertToBase64(file);
            setPhoto(base64)
        }
    }

    const AddPostHandler = async () => {
        if (Textfield !== "") {
            try {
                setIsLoading(true)
                await axios({
                    method: 'post',
                    url: import.meta.env.VITE_BACKEND_URL + "/api/Posts",
                    headers: {},
                    data: {
                        PostBody: Textfield,
                        PostOwnerId: User._id,
                        PostOwnerName: `${User.UserName} ${User.FamilyName}`,
                        PostImage: Photo,
                        PostOwnerImage: User.ProfilePicture,
                        link: Url
                    }
                }
                ).then(() => {
                    Navigate("/")
                    setIsLoading(false)
                })
            } catch (e: any) {
                setErrMessage(e.message)
                Navigate("/Error")
            } finally {
                setIsLoading(false)
            }
        }
    }

    return { AddPostHandler, Photo, handleImageUpload, TextChange, Textfield, Url, setUrl, isLoading, setIsLoading }
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
