import React, { useEffect, useRef } from 'react'
import { ToggleColumn } from '../../../../Components/shared/PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/ToggleColumn.styled'
import { BorderButton } from '../../../../Components/common/BorderButton.styled'

interface Props {
    IsActive: boolean
    setIsActive: any
}
export const OptionsWindow = (props: Props) => {

    const OptionsRef = useRef<any>()

    const closeProfileMenu = (e: any) => { if (!OptionsRef.current?.contains(e.target)) props.setIsActive(false) }


    useEffect(() => {
        document.body.addEventListener("mousedown", closeProfileMenu, true)
        return () => document.removeEventListener("mousedown", closeProfileMenu)
    }, [props.setIsActive])


    return (
        <ToggleColumn bottom={"-40px"} display={props.IsActive ? "flex" : "none"}  >
            <BorderButton >Profile URL</BorderButton>
        </ToggleColumn>
    )
}
