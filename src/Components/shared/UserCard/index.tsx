import React, { MouseEventHandler } from 'react'
import UserIMG from "../../../assets/ICONS/ProfileImg.jpg"
import { UserLogo } from './styled/UserLogo.styled'
import { UserName } from './styled/UserName.styled'
import { Wrapper } from './styled/Wrapper'
import './style.css'

interface Props {
    IsForSearch: boolean
    UserName: string
    UserImg: string
    onClick: MouseEventHandler
    IsLoading: boolean
}
export const UserCard = (props: Props) => {

    return (
        <Wrapper onClick={props.onClick}>
            <UserLogo
                src={props.UserImg !== "" ? props.UserImg : UserIMG}
                IsForSearch={props.IsForSearch} alt="user card"
            />
            {
                props.IsLoading ?
                    <div className="lds-ripple"><div></div><div></div></div>
                    :
                    <UserName IsForSearch={props.IsForSearch} >{props.UserName}</UserName>
            }

        </Wrapper>
    )
}
