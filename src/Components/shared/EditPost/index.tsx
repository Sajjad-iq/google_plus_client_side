import { useEffect, useRef, useState } from 'react'
import { AddImage } from '../../../Pages/Home/Components/PopUpAddPostWindow/Components/AddImage'
import { AddUrl } from '../../../Pages/Home/Components/PopUpAddPostWindow/Components/AddUrl'
import { Exit } from '../../../Pages/Home/Components/PopUpAddPostWindow/Components/Exit'
import { ProfileImageAndPostState } from '../../../Pages/Home/Components/PopUpAddPostWindow/Components/ProfileImageAndPostState'
import { TextArea } from '../../../Pages/Home/Components/PopUpAddPostWindow/Components/TextArea'
import { Image } from '../../../Pages/Home/Components/PopUpAddPostWindow/styled/Image.styled'
import { PostBody } from '../../../Pages/Home/Components/PopUpAddPostWindow/styled/PostBody.styled'
import { WindowWrapper } from '../../../Pages/Home/Components/PopUpAddPostWindow/styled/WindowWrapper'
import { EditPostServices } from '../../../services/PostsServices/EditPostServices'
import { UrlLink } from '../../common/UrlLink.styled'
import { AddUrlWindow } from '../AddUrlWindow'
import { LoadingButton } from '../LoadingButton'
import { Row } from '../Row.styled'
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { imagesConvertToBase64 } from '../../../helpers/imagesConvertToBase64'


interface Props {
    data: any,
    IsActive: string
    CloseFunction: any
}

export const EditPost = (props: Props) => {


    const [isUrlScreenActive, setUrlScreenActive] = useState(false)
    const TextAreaRef = useRef<HTMLTextAreaElement>(null)
    const { TextChange, setPhoto, setUrl, Textfield, Url, Photo, isLoading, SubmitPostHandler } = EditPostServices(props.data, props.CloseFunction)

    useEffect(() => {
        if (TextAreaRef.current) {
            props.IsActive ? TextAreaRef.current?.focus() : ""
            TextAreaRef.current.value = Textfield
        }
    }, [props.IsActive])

    return (
        <WindowWrapper display={"flex"}>

            <AddUrlWindow setUrl={setUrl} setUrlScreenActive={setUrlScreenActive} IsActive={isUrlScreenActive} />

            <PostBody>

                <Row padding="0" align="space-between" width="100%">
                    <ProfileImageAndPostState />
                    <Exit onClick={props.CloseFunction} />
                </Row>


                <TextArea TextValue={Textfield} Ref={TextAreaRef} onChange={TextChange} />

                <UrlLink href={Url} target={"_blank"}>{Url}</UrlLink>

                <Image src={Photo !== "" ? Photo : ""} alt="image uploaded" style={{ display: Photo !== "" ? "flex" : "none" }} />

                <Row padding="10px 0" align="space-between" width="100%">
                    <Row padding="0" align="center" width="fit-content">
                        <AddImage Style={{}} Icon={faImage} onChange={(e) => imagesConvertToBase64(e, setPhoto)} />
                        <AddUrl OpenAddUrlScreen={() => setUrlScreenActive(!isUrlScreenActive)} />
                    </Row>

                    <LoadingButton Style={{}} onClick={SubmitPostHandler} ButtonName="save" IsLoading={isLoading} />
                </Row>

            </PostBody>

        </WindowWrapper>
    )
}
