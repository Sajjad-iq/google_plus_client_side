import { UserData } from '../../../../../services/LocalStorage/UserData'
import { DeleteComments } from '../../../../../services/PostsServices/DeleteComments'
import { Dispatch, SetStateAction, useContext, useEffect, useRef } from 'react'
import { CommentsContext } from '../../../../../Context/CommentsContext'
import { BorderButton } from '../../../../common/BorderButton.styled'
import { ToggleColumn } from '../../../PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/ToggleColumn.styled'
import { Colors } from '../../../../../assets/Colors'

interface Props {
    IsActive: boolean
    setIsActive: Dispatch<SetStateAction<boolean>>
    data: any
    EditWindowStateChange: Dispatch<SetStateAction<boolean>>
}

export const OptionsWindow = (props: Props) => {

    let User = UserData()
    const { DeleteCommentsHandler } = DeleteComments()
    const { setReplayTo, setReplayToId } = useContext(CommentsContext)
    const OptionsRef = useRef<any>()

    const closeCommentMenu = (e: any) => { if (!OptionsRef.current?.contains(e.target)) props.setIsActive(false) }


    useEffect(() => {
        document.body.addEventListener("mousedown", closeCommentMenu, true)
        return () => document.removeEventListener("mousedown", closeCommentMenu)
    }, [props.setIsActive])


    return (
        <ToggleColumn ref={OptionsRef} bottom={props.data.CommentOwnerId == User._id ? "-100px" : "-70px"} display={props.IsActive ? "flex" : "none"}  >

            <BorderButton style={{ color: Colors.Primary.red, width: "75px", display: props.data.CommentOwnerId == User._id ? "flex" : "none" }}
                onClick={() => { DeleteCommentsHandler(props.data) }}
            >
                Delete
            </BorderButton>

            <BorderButton style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "flex" : "none" }}
                onClick={() => { props.EditWindowStateChange(e => e = !e) }}
            >
                Edit
            </BorderButton>

            <BorderButton
                style={{ width: "75px" }}

                onClick={() => {
                    setReplayTo(`+ ${props.data.CommentOwnerName} `)
                    setReplayToId(props.data.CommentOwnerId)
                }}
            >Reply
            </BorderButton>
            <BorderButton style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "none" : "flex" }}>Report</BorderButton>
        </ToggleColumn>

    )
}