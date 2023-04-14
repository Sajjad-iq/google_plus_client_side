import { ChangeEvent, useState } from 'react'
import { UserData } from '../LocalStorage/UserData'

export const ChangeProfileCoverImage = () => {

    let User = UserData()
    const [Photo, setPhoto] = useState<any>(User.CoverPicture)

    const handleFileUpload = async (e: ChangeEvent<any>) => {
        let user = User
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);

        user.CoverPicture = base64
        setPhoto(base64)
        localStorage.setItem('User', JSON.stringify(user) || "");

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

