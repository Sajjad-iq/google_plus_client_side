import { PostBody } from "./styled/PostBody.styled"
import { WindowWrapper } from "./styled/WindowWrapper"
import { ProfileImageAndPostState } from "./Components/ProfileImageAndPostState"
import { TextArea } from "./Components/TextArea"
import { Exit } from "./Components/Exit"
import { AddPost } from "../../../../services/PostsServices/AddPost"
import { Row } from "../../../../Components/shared/PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/Row.styled"
import { AddImage } from "./Components/AddImage"
import { Image } from "./styled/Image.styled"
import { useEffect, useRef, useState } from "react"
import { AddUrl } from "./Components/AddUrl"
import { AddUrlWindow } from "../../../../Components/shared/AddUrlWindow"
import { UrlLink } from "../../../../Components/common/UrlLink.styled"
import { LoadingButton } from "../../../../Components/shared/LoadingButton"
import { useNavigate } from "react-router-dom"



export const PopUpAddPostWindow = () => {

    const { AddPostHandler, Photo, handleImageUpload, TextChange, Textfield, Url, setUrl, isLoading } = AddPost()
    const [isUrlScreenActive, setUrlScreenActive] = useState(false)
    const TextAreaRef = useRef<HTMLTextAreaElement>(null)
    const Navigate = useNavigate()

    useEffect(() => {
        if (TextAreaRef.current) {
            TextAreaRef.current?.focus()
        }
    }, [])



    return (
        <WindowWrapper display={"flex"}>

            <AddUrlWindow setUrl={setUrl} setUrlScreenActive={setUrlScreenActive} IsActive={isUrlScreenActive} />

            <PostBody>

                <Row padding="0" align="space-between" width="100%">
                    <ProfileImageAndPostState />
                    <Exit onClick={() => Navigate("/")} />
                </Row>


                <TextArea TextValue={Textfield} Ref={TextAreaRef} onChange={TextChange} />

                <UrlLink href={Url} target={"_blank"}>{Url}</UrlLink>

                <Image src={Photo !== "" ? Photo : ""} alt="image uploaded" style={{ display: Photo !== "" ? "flex" : "none" }} />

                <Row padding="10px 0" align="space-between" width="100%">
                    <Row padding="0" align="center" width="fit-content">
                        <AddImage onChange={handleImageUpload} />
                        <AddUrl OpenAddUrlScreen={() => setUrlScreenActive(!isUrlScreenActive)} />
                    </Row>

                    <LoadingButton onClick={AddPostHandler} ButtonName="Post" IsLoading={isLoading} />
                </Row>

            </PostBody>

        </WindowWrapper>
    )
}
