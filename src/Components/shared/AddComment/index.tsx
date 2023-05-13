import React, { ChangeEventHandler, MouseEventHandler, useContext, useEffect, useState } from 'react'
import { TextField } from '../../common/TextField.styled'
import { UserLogo } from '../../common/UserLogo.styled'
import { LoadingButton } from '../LoadingButton'
import { Row } from '../Row.styled'
import { Column } from './styled/Column.styled'
import { Button } from '../../common/Button.styled'
import { ReplayTag } from '../SingleCommint/styled/ReplayTag'
import { CommentsContext } from '../../../Context/CommentsContext'
import { CommentBodySection } from '../SingleCommint/styled/CommentBodySection.styled'

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
            <Row width='100%' padding='5px 0' align='flex-start' style={{ alignItems: "flex-start" }} >
                <UserLogo src={props.UserImage} loading={"lazy"} alt='comment image label' />

                <CommentBodySection  >
                    <ReplayTag>{ReplayTo}</ReplayTag>
                    <TextField ref={props.Ref} onFocus={() => setIsActive(true)} IsValidValue={true} onChange={props.onChange} placeholder="Add Comment..." rows={IsActive ? 2 : 1} style={{ margin: "0", border: "none", width: "100%" }} />
                </CommentBodySection>
            </Row>

            <Row width='100%' padding='10px 0' align='flex-end' style={{ display: IsActive ? "flex" : "none" }} >
                <LoadingButton Style={{}} onClick={props.onSubmit} ButtonName={"Submit"} IsLoading={props.IsLoading} />
            </Row>
        </Column>
    )
}
