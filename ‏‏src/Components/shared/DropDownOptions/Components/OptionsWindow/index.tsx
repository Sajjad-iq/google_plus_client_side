import { ReactNode, useEffect, useRef } from 'react'
import { ToggleColumn } from '../../../PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/ToggleColumn.styled'

interface Props {
    IsActive: boolean
    setIsActive: any
    children: ReactNode
    bottom: string
}
export const OptionsWindow = (props: Props) => {

    const OptionsRef = useRef<any>()

    const closeProfileMenu = (e: any) => { if (!OptionsRef.current?.contains(e.target)) props.setIsActive(false) }


    useEffect(() => {
        document.body.addEventListener("mousedown", closeProfileMenu, true)
        return () => document.removeEventListener("mousedown", closeProfileMenu)
    }, [props.setIsActive])


    return (
        <ToggleColumn ref={OptionsRef} bottom={props.bottom} display={props.IsActive ? "flex" : "none"}  >
            {props.children}
        </ToggleColumn>
    )
}
