import React, { MouseEventHandler } from 'react'
import UserIMG from "../../../assets/ICONS/ProfileImg.jpg"
import { BorderWrapper } from '../../common/BorderWrapper'
import './style.css'
import { UserLogo } from '../../common/UserLogo.styled'
import { UserName } from '../../common/UserName.styled'

interface Props {
    IsForSearch: boolean
    UserName: string
    UserImg: string
    onClick: MouseEventHandler
    IsLoading: boolean
}
export const UserCard = (props: Props) => {

    return (
        <BorderWrapper onClick={props.onClick}>
            <UserLogo
                src={props.UserImg !== "" ? props.UserImg : UserIMG}
            />
            {
                props.IsLoading ?
                    <div className="lds-ripple"><div></div><div></div></div>
                    :
                    <UserName IsCommentUserName={false} >{props.UserName}</UserName>
            }
        </BorderWrapper>
    )
}
