import React, { MouseEventHandler } from 'react'
import { CyanButton } from '../../common/CyanButton.styled'
import "./style.css"

interface Props {
    onClick: MouseEventHandler
    ButtonName: string
    IsLoading: boolean
}
export const LoadingButton = (props: Props) => {
    return (
        <CyanButton onClick={props.onClick} >
            {props.IsLoading ?
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                :
                props.ButtonName
            }
        </CyanButton>
    )
}
