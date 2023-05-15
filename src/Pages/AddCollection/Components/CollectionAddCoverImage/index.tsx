import { CollectionCoverImage } from '../../styled/CollectionCoverImage.styled'
import { Wrapper } from '../../../../Components/shared/Wrapper'
import CoverImage from '../../../../assets/ICONS/Photos/marguerite-729510__340.jpg'
import { AddImage } from '../../../Home/Components/PopUpAddPostWindow/Components/AddImage'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent } from 'react'

interface Props {
    CollectionImage: string
    setImage: any
}
export const CollectionAddCoverImage = (props: Props) => {

    const handleImageUpload = async (e: ChangeEvent<any>) => {
        const file = e.target.files[0] || null;
        if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/gif" || file.type == "image/jpg") {
            const base64 = await convertToBase64(file);
            props.setImage(base64)
        } else {
            window.alert("you can only upload images")
        }
    }
    return (
        <Wrapper>
            <CollectionCoverImage src={props.CollectionImage || CoverImage} alt='collection add image' style={{}} />
            <AddImage Icon={faCamera} onChange={handleImageUpload} Style={{ position: "absolute", bottom: "20px", right: "20px", background: "rgba(0, 0, 0, 0.400)", borderRadius: "50%", padding: "10px" }} />
        </Wrapper>
    )
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
