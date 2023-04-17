import { UserData } from '../../../../../services/LocalStorage/UserData'
import { Button } from '../../../PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/Button.styled'
import { ToggleColumn } from '../../styled/ToggleColumn.styled'
import { DeleteComments } from '../../../../../services/PostsServices/DeleteComments'
import { Dispatch, SetStateAction, useContext } from 'react'
import { EditComment } from '../../../../../services/PostsServices/EditComment'
import { CommentsContext } from '../../../../../Context/CommentsContext'

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

            <Button style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "flex" : "none" }}
                onClick={() => {
                    DeleteCommentsHandler(props.data)
                    props.setIsActive(e => e = !e)
                }}
                isLastOne={false}>
                Delete
            </Button>

            <Button style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "flex" : "none" }}
                onClick={() => {
                    props.setIsActive(e => e = !e)
                    props.EditWindowStateChange(e => e = !e)
                }}
                isLastOne={false}>
                Edit
            </Button>

            <Button
                style={{ width: "75px" }}
                isLastOne={false}
                onClick={() => {
                    props.setIsActive(e => e = !e)
                    setReplayTo(`+ ${props.data.CommentOwnerName} `)
                    setReplayToId(props.data.CommentOwnerId)
                }}
            >Reply
            </Button>
            <Button style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "none" : "flex" }} isLastOne={true}>Report</Button>
        </ToggleColumn>

    )
}
