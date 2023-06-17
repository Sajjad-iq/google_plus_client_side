import { Row } from '../Row.styled'
import { UserName } from '../../common/UserName.styled'
import { Column } from '../Column.styled'
import { CommentBody } from './styled/CommentBody.styled'
import { MouseEventHandler, useContext, useEffect, useRef, useState } from 'react'
import './styled/style.css'
import Image from '../../../assets/ICONS/ProfileImg.jpg'
import { DateCalculate } from '../../../services/PostsServices/DateCalculate'
import { TextField } from '../../common/TextField.styled'
import { EditComment } from '../../../services/PostsServices/EditComment'
import { CommentBodySection } from './styled/CommentBodySection.styled'
import { LoadingButton } from '../LoadingButton'
import { ReplayTag } from './styled/ReplayTag'
import { P } from '../../common/P.styled'
import { CommentUserLogo } from '../AddComment/styled/CommentUserLogo.styled'
import { Colors } from '../../../assets/Colors'
import { CommentButton } from './styled/CommentButton.styled'
import { CommentsContext } from '../../../Context/CommentsContext'
import { GlobalContext } from '../../../Context/GlobalContext'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../../common/Button.styled'
import { OptionsWindow } from './Components/OptionsWindow'
import { PostImg } from '../Post/styled/PostImg.styled'

interface Props {
    CreatedAt: string
    onClickOnLogo: MouseEventHandler
    data: any
}

export const SingleComment = (props: Props) => {

    const [IsEditCommentWindowActive, setIsEditCommentWindowActive] = useState(false)
    const [HasLike, setHasLike] = useState(false)
    const DateCalculator = DateCalculate(props.CreatedAt)
    const ref = useRef<any>(null)
    const { Textfield, TextChange, SubmitCommentHandler, isLoading } = EditComment(props.data)
    const { setReplayTo, setReplayToId } = useContext(CommentsContext)
    const { User } = useContext(GlobalContext)
    const [IsOptionsWindowActive, setIsOptionsWindowActive] = useState(false)

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
        <Row width='100%' padding='10px' align='flex-start' style={{ alignItems: "flex-start", margin: "1px 0" }}>

            <CommentUserLogo onClick={props.onClickOnLogo} src={props.data.CommentOwnerImage !== "" ? props.data.CommentOwnerImage : Image} alt='comment image label' style={{ marginTop: "7px" }} />


            <CommentBodySection >

                <Row width='100%' padding='10px 0' align='space-between'>
                    <UserName onClick={props.onClickOnLogo} IsCommentUserName={true} >{props.data.CommentOwnerName}</UserName>

                    <Row width='fit-content' padding='0px' align='center'>
                        <P>{DateCalculator()}</P>

                        <Row width='fit-content' align='flex-start' padding='0 0 0 10px' style={{ position: "relative" }}>
                            <Button onClick={() => setIsOptionsWindowActive(!IsOptionsWindowActive)}>
                                <FontAwesomeIcon className='post-fa-comment-options' icon={faEllipsisVertical} />
                            </Button>

                            <OptionsWindow setIsActive={setIsOptionsWindowActive} EditWindowStateChange={setIsEditCommentWindowActive} data={props.data} IsActive={IsOptionsWindowActive} />
                        </Row>
                    </Row>
                </Row>






                <Column width='100%' padding='0' align='space-between'>
                    {
                        IsEditCommentWindowActive ?
                            <Row width='100%' padding='0' align='space-between'>
                                <TextField ref={ref} IsValidValue={true} onChange={TextChange} rows={1} style={{ border: "none", width: "80%", padding: "5px 2" }} />

                                <LoadingButton Style={{}} onClick={() => {
                                    setIsEditCommentWindowActive(!IsEditCommentWindowActive)
                                    SubmitCommentHandler()
                                }}
                                    ButtonName='Save'
                                    IsLoading={isLoading}
                                />
                            </Row>
                            :
                            <Column width='100%' padding='0' align='space-between'>
                                <CommentBody>{Textfield}</CommentBody>
                                <ReplayTag style={{ alignSelf: "flex-end", marginTop: "15px" }}>{props.data.CommentsRePlayTo || ""}</ReplayTag>
                                <PostImg style={{ display: props.data.CommentImage ? "block" : "none" }} src={props.data.CommentImage} alt="post image" />
                            </Column>
                    }
                </Column>


                {
                    props.data.CommentOwnerId === User._id ?
                        <Row width='100%' padding='0' align='flex-start'>

                            <CommentButton
                                style={{ color: HasLike ? Colors.Primary.red : Colors.Primary.SoftBlack }}
                                onClick={() => setHasLike(!HasLike)}
                            >+1</CommentButton>

                            <CommentButton
                                style={{ color: Colors.Secoundry.Cyan }}
                                onClick={() => setIsEditCommentWindowActive(!IsEditCommentWindowActive)}
                            >edit</CommentButton>

                        </Row>

                        :

                        <Row width='100%' padding='0' align='flex-start'>

                            <CommentButton
                                style={{ color: HasLike ? Colors.Primary.red : Colors.Primary.SoftBlack }}
                                onClick={() => setHasLike(!HasLike)}
                            >+1</CommentButton>

                            <CommentButton
                                style={{ color: Colors.Secoundry.Cyan }}
                                onClick={() => {
                                    setReplayTo(`+ ${props.data.CommentOwnerName} `)
                                    setReplayToId(props.data.CommentOwnerId)
                                }}
                            >replay</CommentButton>
                        </Row>
                }

            </CommentBodySection>

        </Row>
    )
}
