import { UserLogo } from '../../common/UserLogo.styled'
import { Row } from '../Row.styled'
import { UserName } from '../../common/UserName.styled'
import { Column } from '../Column.styled'
import { CommentBody } from './styled/CommentBody.styled'
import { P } from './styled/P.styled'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { faEllipsisVertical, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../../common/Button.styled'
import './styled/style.css'
import { OptionsWindow } from './components/OptionsWindow'
import Image from '../../../assets/ICONS/ProfileImg.jpg'
import { DateCalculate } from '../../../services/PostsServices/DateCalculate'
import { TextField } from '../../common/TextField.styled'
import { EditComment } from '../../../services/PostsServices/EditComment'
import { CommentBodySection } from './styled/CommentBodySection.styled'


interface Props {
    CreatedAt: string
    onClickOnLogo: MouseEventHandler
    data: any
}
export const SingleComment = (props: Props) => {

    const [IsOptionsWindowActive, setIsOptionsWindowActive] = useState(true)
    const [IsEditCommentWindowActive, setIsEditCommentWindowActive] = useState(false)
    const DateCalculator = DateCalculate(props.CreatedAt)
    const ref = useRef<any>(null)
    const { Textfield, TextChange, SubmitCommentHandler } = EditComment(props.data)

    const resizeTextArea = () => {
        if (IsEditCommentWindowActive) {
            if (ref.current.value == "") {
                ref.current.style.height = "50px";
            } else if (ref.current.value !== "") {
                ref.current.style.height = "auto";
                ref.current.style.height = ref.current.scrollHeight + "px";
            }
        }
    }

    useEffect(() => {
        if (ref.current) {
            IsEditCommentWindowActive ? ref.current?.focus() : ""
            ref.current.value = Textfield
        }
    }, [IsEditCommentWindowActive])

    useEffect(resizeTextArea, [Textfield]);

    return (
        <Column width='100%' padding=' 0 10px' align='center' >

            <Row width='100%' padding='10px 0' align='space-between'>
                <Row width='fit-content' padding='0px' align='center' >
                    <UserLogo onClick={props.onClickOnLogo} src={props.data.CommentOwnerImage !== "" ? props.data.CommentOwnerImage : Image} loading={"lazy"} alt='comment image label' />
                    <UserName onClick={props.onClickOnLogo} IsCommentUserName={true} >{props.data.CommentOwnerName}</UserName>
                </Row>

                <Row width='fit-content' padding='0px' align='center'>
                    <P>{DateCalculator()}</P>

                    <Row width='fit-content' align='flex-start' padding='0px 15px' style={{ position: "relative" }}>
                        {
                            IsEditCommentWindowActive ?
                                <Button onClick={() => {
                                    setIsEditCommentWindowActive(!IsEditCommentWindowActive)
                                    SubmitCommentHandler()
                                }}>
                                    <FontAwesomeIcon className='post-fa-comment-options' icon={faCheck} />
                                </Button>
                                :
                                <Button onClick={() => setIsOptionsWindowActive(!IsOptionsWindowActive)}>
                                    <FontAwesomeIcon className='post-fa-comment-options' icon={faEllipsisVertical} />
                                </Button>
                        }

                        <OptionsWindow setIsActive={setIsOptionsWindowActive} isEditWindowActive={IsEditCommentWindowActive} EditWindowStateChange={setIsEditCommentWindowActive} data={props.data} IsActive={IsOptionsWindowActive} />

                    </Row>
                </Row>

            </Row>

            <CommentBodySection >
                {
                    IsEditCommentWindowActive ?
                        <TextField ref={ref} IsValidValue={true} onChange={TextChange} rows={1} style={{ margin: "10px 0 0 0", border: "none", width: "90%" }} />
                        :
                        <CommentBody>{Textfield}</CommentBody>
                }

            </CommentBodySection>

        </Column>
    )
}
