import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../../../../Context/GlobalContext'
import { UserData } from '../../../../../../services/LocalStorage/UserData'
import { DeletePost } from '../../../../../../services/PostsServices/DeletePost'
import { ToggleColumn } from '../styled/ToggleColumn.styled'
import { BorderButton } from '../../../../../common/BorderButton.styled'

interface Props {
    IsActive: boolean
    data: any
    setIsActive: any
}
export const OptionsWindow = (props: Props) => {

    let User = UserData()
    const { DeletePostHandler } = DeletePost()
    const { setIsEditPostWindowActive } = useContext(GlobalContext)

    useEffect(() => {
        const closePostMenu = (e: any) => {
            props.setIsActive(false)
            e.stopPropagation()
        }

        document.body.addEventListener("mousedown", closePostMenu)
        return () => document.body.removeEventListener("mousedown", closePostMenu)
    }, [])

    return (
        <ToggleColumn bottom={props.data.PostOwnerId == User._id ? "-80px" : "-50px"} display={props.IsActive ? "none" : "flex"}  >

            <BorderButton style={{ display: props.data.PostOwnerId == User._id ? "flex" : "none" }}
                onClick={() => { DeletePostHandler(props.data) }}
                isLastOne={false}>
                Delete
            </BorderButton>

            <BorderButton style={{ display: props.data.PostOwnerId == User._id ? "flex" : "none" }}
                onClick={() => setIsEditPostWindowActive(true)}
                isLastOne={false}>
                Edit
            </BorderButton>

            <BorderButton isLastOne={false}>Mute</BorderButton>
            <BorderButton style={{ display: props.data.PostOwnerId == User._id ? "none" : "flex" }} isLastOne={true}>Report</BorderButton>
        </ToggleColumn>

    )
}
