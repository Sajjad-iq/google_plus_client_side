import { UserData } from '../../../../../services/LocalStorage/UserData'
import { DeleteComments } from '../../../../../services/PostsServices/DeleteComments'
import { Dispatch, SetStateAction, useContext } from 'react'
import { CommentsContext } from '../../../../../Context/CommentsContext'
import { BorderButton } from '../../../../common/BorderButton.styled'
import { ToggleColumn } from '../../../PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/ToggleColumn.styled'

interface Props {
    IsActive: boolean
    setIsActive: Dispatch<SetStateAction<boolean>>
    data: any
    EditWindowStateChange: Dispatch<SetStateAction<boolean>>
    isEditWindowActive: boolean
}

export const OptionsWindow = (props: Props) => {

    let User = UserData()
    const { DeleteCommentsHandler } = DeleteComments()
    const { setReplayTo, setReplayToId } = useContext(CommentsContext)
    return (
        <ToggleColumn bottom={props.data.CommentOwnerId == User._id ? "-100px" : "-70px"} display={props.IsActive ? "none" : "flex"}  >

            <BorderButton style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "flex" : "none" }}
                onClick={() => {
                    DeleteCommentsHandler(props.data)
                    props.setIsActive(e => e = !e)
                }}
                isLastOne={false}>
                Delete
            </BorderButton>

            <BorderButton style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "flex" : "none" }}
                onClick={() => {
                    props.setIsActive(e => e = !e)
                    props.EditWindowStateChange(e => e = !e)
                }}
                isLastOne={false}>
                Edit
            </BorderButton>

            <BorderButton
                style={{ width: "75px" }}
                isLastOne={false}
                onClick={() => {
                    props.setIsActive(e => e = !e)
                    setReplayTo(`+ ${props.data.CommentOwnerName} `)
                    setReplayToId(props.data.CommentOwnerId)
                }}
            >Reply
            </BorderButton>
            <BorderButton style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "none" : "flex" }} isLastOne={true}>Report</BorderButton>
        </ToggleColumn>

    )
}
