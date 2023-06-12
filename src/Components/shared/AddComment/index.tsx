import { useContext, useEffect, useRef, useState } from 'react'
import { TextField } from '../../common/TextField.styled'
import { LoadingButton } from '../LoadingButton'
import { Column } from './styled/Column.styled'
import { ReplayTag } from '../SingleCommint/styled/ReplayTag'
import { CommentsContext } from '../../../Context/CommentsContext'
import { CommentBodySection } from '../SingleCommint/styled/CommentBodySection.styled'
import { CommentUserLogo } from './styled/CommentUserLogo.styled'
import { Row } from '../Row.styled'
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { AddUrl } from '../../../Pages/Home/Components/PopUpAddPostWindow/Components/AddUrl'
import { AddImage } from '../../../Pages/Home/Components/PopUpAddPostWindow/Components/AddImage'
import { AddCommentServices } from '../../../services/PostsServices/AddCommentServices'
import { UserData } from '../../../services/LocalStorage/UserData'
import { imagesConvertToBase64 } from '../../../helpers/imagesConvertToBase64'
import { Image } from '../../../Pages/Home/Components/PopUpAddPostWindow/styled/Image.styled'
import UserImage from '../../../assets/ICONS/ProfileImg.jpg'

interface Props {
    Comments: any
    setComments: any
}
export const AddComment = (props: Props) => {

    const [IsActive, setIsActive] = useState(false)
    const { ReplayTo } = useContext(CommentsContext)
    const RestTextFelidValueReload = () => Ref ? Ref.current.value = "" : ""
    const { onChange, CommentSubmitHandler, TextFieldValue, isLoading, Photo, setPhoto } = AddCommentServices(RestTextFelidValueReload)
    const Ref = useRef<any>(null)
    let User = UserData()


    const resizeTextArea = () => {
        if (Ref.current.value == "") {
            Ref.current.style.height = "50px";

        } else {
            Ref.current.style.height = "auto";
            Ref.current.style.height = Ref.current.scrollHeight + "px";
        }
    }

    useEffect(resizeTextArea, [TextFieldValue]);

    return (
        <Column >
            <Row width='100%' padding='5px 0' align='flex-start' style={{ alignItems: "center" }} >
                <CommentUserLogo src={User.ProfilePicture || UserImage} alt='comment image label' />

                <CommentBodySection  >
                    <ReplayTag>{ReplayTo}</ReplayTag>
                    <TextField ref={Ref} onFocus={() => setIsActive(true)} IsValidValue={true} onChange={onChange} placeholder="Add Comment..." rows={IsActive ? 2 : 1} style={{ margin: "0", border: "none", width: "100%" }} />
                    <Image src={Photo !== "" ? Photo : ""} alt="image uploaded" style={{ display: Photo !== "" ? "flex" : "none" }} />

                </CommentBodySection>
            </Row>

            <Row width='100%' padding='10px 0' align='space-between' style={{ display: IsActive ? "flex" : "none" }} >
                <Row padding="0" align="center" width="fit-content">
                    <AddImage Icon={faImage} Style={{}} onChange={(e) => imagesConvertToBase64(e, setPhoto)} />
                    <AddUrl OpenAddUrlScreen={() => ""} />
                </Row>

                <LoadingButton Style={{}} onClick={() => {
                    CommentSubmitHandler(props.setComments, props.Comments)
                    setPhoto("")
                }}
                    ButtonName={"Submit"} IsLoading={isLoading} />

            </Row>
        </Column>
    )
}
