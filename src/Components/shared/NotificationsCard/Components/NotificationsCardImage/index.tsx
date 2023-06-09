import { ImageWrapper } from '../../styled/ImageWrapper'
import { SmallImage } from '../../styled/SmallImage.styled'
import profileImg from '../../../../../assets/ICONS/ProfileImg.jpg'
import { NotificationsUserImage } from '../../styled/NotificationsUserImage.styled'

interface Props {
    Images: ["", "", "", ""]
}
export const NotificationsCardImage = (props: Props) => {


    return (

        props.Images.length <= 1 ?
            <NotificationsUserImage src={props.Images[0] || profileImg} />
            :
            props.Images.length <= 2 ?
                <ImageWrapper >
                    <SmallImage src={props.Images[0] || profileImg} style={{ top: "0px", left: "0px", width: "30px", height: "30px" }} />
                    <SmallImage src={props.Images[1] || profileImg} style={{ bottom: "0px", right: "0px", width: "30px", height: "30px" }} />
                </ImageWrapper >
                :
                props.Images.length <= 3 ?
                    <ImageWrapper >
                        <SmallImage src={props.Images[0] || profileImg} style={{ top: "0px", left: "11px", width: "27px", height: "27px" }} />
                        <SmallImage src={props.Images[1] || profileImg} style={{ bottom: "0px", left: "0px", width: "27px", height: "27px" }} />
                        <SmallImage src={props.Images[2] || profileImg} style={{ bottom: "0px", right: "0px", width: "27px", height: "27px" }} />
                    </ImageWrapper >
                    :
                    props.Images.length <= 4 ?
                        <ImageWrapper >
                            <SmallImage src={props.Images[0] || profileImg} style={{ top: "0px", left: "0px" }} />
                            <SmallImage src={props.Images[1] || profileImg} style={{ top: "0px", right: "0px" }} />
                            <SmallImage src={props.Images[2] || profileImg} style={{ bottom: "0px", left: "0px" }} />
                            <SmallImage src={props.Images[3] || profileImg} style={{ bottom: "0px", right: "0px" }} />
                        </ImageWrapper >
                        :
                        <ImageWrapper >
                            <SmallImage src={props.Images[0] || profileImg} style={{ top: "0px", left: "0px" }} />
                            <SmallImage src={props.Images[1] || profileImg} style={{ top: "0px", right: "0px" }} />
                            <SmallImage src={props.Images[2] || profileImg} style={{ bottom: "0px", left: "0px" }} />
                            <SmallImage src={props.Images[3] || profileImg} style={{ bottom: "0px", right: "0px" }} />
                        </ImageWrapper >
    )
}
