import React, { useContext } from 'react'
import { GlobalContext } from '../../../../../../Context/GlobalContext'
import { UserData } from '../../../../../../services/LocalStorage/UserData'
import { DeletePost } from '../../../../../../services/PostsServices/DeletePost'
import { Button } from '../styled/Button.styled'
import { ToggleColumn } from '../styled/ToggleColumn.styled'

interface Props {
    IsActive: boolean
    data: any
}
export const OptionsWindow = (props: Props) => {

    let User = UserData()
    const { DeletePostHandler } = DeletePost()
    const { IsEditPostWindowActive, setIsEditPostWindowActive } = useContext(GlobalContext)

    return (
        <ToggleColumn bottom={props.data.PostOwnerId == User._id ? "-80px" : "-50px"} display={props.IsActive ? "none" : "flex"}  >

            <Button style={{ display: props.data.PostOwnerId == User._id ? "flex" : "none" }}
                onClick={() => { DeletePostHandler(props.data) }}
                isLastOne={false}>
                Delete
            </Button>

            <Button style={{ display: props.data.PostOwnerId == User._id ? "flex" : "none" }}
                onClick={() => setIsEditPostWindowActive(true)}
                isLastOne={false}>
                Edit
            </Button>

            <Button isLastOne={false}>Mute</Button>
            <Button style={{ display: props.data.PostOwnerId == User._id ? "none" : "flex" }} isLastOne={true}>Report</Button>
        </ToggleColumn>

    )
}
