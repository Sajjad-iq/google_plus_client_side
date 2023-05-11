import React, { ChangeEvent, useContext, useState } from 'react'
import { UserData } from '../LocalStorage/UserData'
import { GlobalContext } from '../../Context/GlobalContext'

export const ChangeProfileImageHandler = () => {

    const { setUser, User } = useContext(GlobalContext)
    const [Photo, setPhoto] = useState<any>(User.ProfilePicture)

    const handleFileUpload = async (e: ChangeEvent<any>) => {
        const file = e.target.files[0] || null;
        if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/gif" || file.type == "image/jpg") {
            let user = User
            const base64 = await convertToBase64(file);

            user.CoverPicture = base64
            setPhoto(base64)
            setUser(user)
        } else {
            window.alert("you can only upload images")
        }

    }
    return { handleFileUpload, Photo }
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
