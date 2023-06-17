import { ChangeEvent } from "react";

export const imagesConvertToBase64 = async function (e: ChangeEvent<any>, setPhoto: any) {

    const file = e.target.files[0] || null;
    if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/gif" || file.type == "image/jpg" || file.type == "image/webp") {
        const base64 = await convertToBase64(file)
        setPhoto(base64)
    } else {
        window.alert("you can only upload images")
    }
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