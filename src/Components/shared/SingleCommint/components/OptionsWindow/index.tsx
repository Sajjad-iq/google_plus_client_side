import { UserData } from '../../../../../services/LocalStorage/UserData'
import { Button } from '../../../PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/Button.styled'
import { ToggleColumn } from '../../styled/ToggleColumn.styled'
import { DeleteComments } from '../../../../../services/PostsServices/DeleteComments'
import { Dispatch, SetStateAction } from 'react'
import { EditComment } from '../../../../../services/PostsServices/EditComment'

interface Props {
    IsActive: boolean
    data: any
    EditWindowStateChange: Dispatch<SetStateAction<boolean>>
    isEditWindowActive: boolean
}

export const OptionsWindow = (props: Props) => {

    let User = UserData()
    const { DeleteCommentsHandler } = DeleteComments()

    return (
        <ToggleColumn bottom={props.data.CommentOwnerId == User._id ? "-70px" : "-40px"} display={props.IsActive || props.isEditWindowActive ? "none" : "flex"}  >

            <Button style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "flex" : "none" }}
                onClick={() => DeleteCommentsHandler(props.data)}
                isLastOne={false}>
                Delete
            </Button>

            <Button style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "flex" : "none" }}
                onClick={() => { props.EditWindowStateChange(e => e = !e) }}
                isLastOne={false}>
                Edit
            </Button>

            <Button style={{ width: "75px" }} isLastOne={false}>Reply</Button>
            <Button style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "none" : "flex" }} isLastOne={true}>Report</Button>
        </ToggleColumn>

    )
}
