import { ChangeEventHandler, MouseEventHandler, useContext, useEffect, useState } from 'react'
import { TextField } from '../../common/TextField.styled'
import { LoadingButton } from '../LoadingButton'
import { Row } from '../Row.styled'
import { Column } from './styled/Column.styled'
import { ReplayTag } from '../SingleCommint/styled/ReplayTag'
import { CommentsContext } from '../../../Context/CommentsContext'
import { CommentBodySection } from '../SingleCommint/styled/CommentBodySection.styled'
import { CommentUserLogo } from './styled/CommentUserLogo.styled'
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { AddUrl } from '../../../Pages/Home/Components/PopUpAddPostWindow/Components/AddUrl'
import { AddImage } from '../../../Pages/Home/Components/PopUpAddPostWindow/Components/AddImage'

interface Props {
    onChange: ChangeEventHandler
    onSubmit: MouseEventHandler
    UserImage: string
    Ref: any
    TextValue: string
    IsLoading: boolean
}

export const AddComment = (props: Props) => {

    const [IsActive, setIsActive] = useState(false)
    const { ReplayTo } = useContext(CommentsContext)

    const resizeTextArea = () => {
        if (props.Ref.current.value == "") {
            props.Ref.current.style.height = "50px";

        } else {
            props.Ref.current.style.height = "auto";
            props.Ref.current.style.height = props.Ref.current.scrollHeight + "px";
        }
    }

    useEffect(resizeTextArea, [props.TextValue]);

    return (
        <Column >
            <Row width='100%' padding='5px 0' align='flex-start' style={{ alignItems: "center" }} >
                <CommentUserLogo src={props.UserImage} alt='comment image label' />

                <CommentBodySection  >
                    <ReplayTag>{ReplayTo}</ReplayTag>
                    <TextField ref={props.Ref} onFocus={() => setIsActive(true)} IsValidValue={true} onChange={props.onChange} placeholder="Add Comment..." rows={IsActive ? 2 : 1} style={{ margin: "0", border: "none", width: "100%" }} />
                </CommentBodySection>
            </Row>

            <Row width='100%' padding='10px 0' align='space-between' style={{ display: IsActive ? "flex" : "none" }} >
                <Row padding="0" align="center" width="fit-content">
                    <AddImage Icon={faImage} Style={{}} onChange={() => ""} />
                    <AddUrl OpenAddUrlScreen={() => ""} />
                </Row>

                <LoadingButton Style={{}} onClick={props.onSubmit} ButtonName={"Submit"} IsLoading={props.IsLoading} />

            </Row>
        </Column>
    )
}
