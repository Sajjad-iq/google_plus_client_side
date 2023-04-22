import React, { useContext, useEffect, useRef } from 'react'
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
    const OptionsRef = useRef<any>()
    const { DeletePostHandler } = DeletePost()
    const { setIsEditPostWindowActive } = useContext(GlobalContext)
    const closePostMenu = (e: any) => { if (!OptionsRef.current?.contains(e.target)) props.setIsActive(false) }

    useEffect(() => {
        document.body.addEventListener("mousedown", closePostMenu, true)
        return () => document.removeEventListener("mousedown", closePostMenu)
    }, [props.setIsActive])

    return (
        <ToggleColumn ref={OptionsRef} bottom={props.data.PostOwnerId == User._id ? "-80px" : "-50px"} display={props.IsActive ? "flex" : "none"}  >

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
