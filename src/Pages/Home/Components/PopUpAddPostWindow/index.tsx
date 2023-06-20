import { PostBody } from "./styled/PostBody.styled"
import { WindowWrapper } from "./styled/WindowWrapper"
import { ProfileImageAndPostState } from "./Components/ProfileImageAndPostState"
import { TextArea } from "./Components/TextArea"
import { AddPost } from "../../../../services/PostsServices/AddPost"
import { AddImage } from "./Components/AddImage"
import { Image } from "./styled/Image.styled"
import { useEffect, useRef, useState } from "react"
import { AddUrl } from "./Components/AddUrl"
import { AddUrlWindow } from "../../../../Components/shared/AddUrlWindow"
import { UrlLink } from "../../../../Components/common/UrlLink.styled"
import { LoadingButton } from "../../../../Components/shared/LoadingButton"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "../../../Auth/styled/Button.styled"
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { CollectionsSelect } from "./Components/CollectionsSelect"
import { imagesConvertToBase64 } from "../../../../helpers/imagesConvertToBase64"
import { Row } from "../../../../Components/shared/Row.styled"



export const PopUpAddPostWindow = () => {

    const { AddPostHandler, Photo, setPhoto, TextChange, Textfield, Url, setUrl, isLoading } = AddPost()
    const [isUrlScreenActive, setUrlScreenActive] = useState(false)
    const TextAreaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => { if (TextAreaRef.current) TextAreaRef.current?.focus() }, [])

    return (
        <WindowWrapper display={"flex"}>

            <CollectionsSelect />
            <AddUrlWindow setUrl={setUrl} setUrlScreenActive={setUrlScreenActive} IsActive={isUrlScreenActive} />

            <PostBody>

                <Row padding="0" align="space-between" width="100%">
                    <ProfileImageAndPostState />
                    <LoadingButton Style={{}} onClick={AddPostHandler} ButtonName="Post" IsLoading={isLoading} />
                </Row>


                <TextArea TextValue={Textfield} Ref={TextAreaRef} onChange={TextChange} />

                <UrlLink href={Url} target={"_blank"}>{Url}</UrlLink>

                <Image src={Photo !== "" ? Photo : ""} alt="image uploaded" style={{ display: Photo !== "" ? "flex" : "none" }} />

                <Row padding="10px 0" align="space-between" width="100%" style={{ alignSelf: "flex-start" }}>
                    <Row padding="0" align="center" width="fit-content">
                        <AddImage Icon={faImage} Style={{}} onChange={(e) => imagesConvertToBase64(e, setPhoto)} />
                        <AddUrl OpenAddUrlScreen={() => setUrlScreenActive(!isUrlScreenActive)} />
                    </Row>

                    <Button style={{ background: "none" }} onClick={() => ""}>
                        <FontAwesomeIcon className='post-fa-comment-options' icon={faEllipsisVertical} />
                    </Button>
                </Row>

            </PostBody>

        </WindowWrapper>
    )
}
