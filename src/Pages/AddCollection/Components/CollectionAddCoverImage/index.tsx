import { CollectionCoverImage } from '../../styled/CollectionCoverImage.styled'
import { Wrapper } from '../../../../Components/shared/Wrapper'
import CoverImage from '../../../../assets/ICONS/Photos/marguerite-729510__340.webp'
import { AddImage } from '../../../Home/Components/PopUpAddPostWindow/Components/AddImage'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { imagesConvertToBase64 } from '../../../../helpers/imagesConvertToBase64'

interface Props {
    CollectionImage: string
    setImage: any
}
export const CollectionAddCoverImage = (props: Props) => {

    return (
        <Wrapper>
            <CollectionCoverImage src={props.CollectionImage || CoverImage} alt='collection add image' style={{}} />
            <AddImage Icon={faCamera} onChange={(e) => imagesConvertToBase64(e, props.setImage)} Style={{ position: "absolute", bottom: "20px", right: "20px", background: "rgba(0, 0, 0, 0.400)", borderRadius: "50%", padding: "10px" }} />
        </Wrapper>
    )
}


