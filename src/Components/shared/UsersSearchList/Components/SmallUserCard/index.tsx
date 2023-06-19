import React from 'react'
import { Row } from '../../../Row.styled'
import { UserName } from '../../../../common/UserName.styled'
import { CommentUserLogo } from '../../../AddComment/styled/CommentUserLogo.styled'
import Image from '../../../../../assets/ICONS/ProfileImg.jpg'
import { Colors } from '../../../../../assets/Colors'
import { UserLogo } from '../../../../common/UserLogo.styled'

interface Props {
    UserName: string
    UserImage: string
    onClick: any
    forSearch: boolean
}
export const SmallUserCard = (props: Props) => {
    return (
        <Row onClick={props.onClick} width='100%' padding='0' align='flex-start'>
            {props.forSearch ?
                <UserLogo src={props.UserImage !== "" ? props.UserImage : Image} alt='user image label' />
                :
                <CommentUserLogo onClick={() => ""} src={props.UserImage !== "" ? props.UserImage : Image} alt='user image label' style={{ margin: "3px" }} />
            }
            <UserName style={{ color: Colors.Secoundry.Cyan }} onClick={() => ""} IsCommentUserName={!props.forSearch} >{props.UserName}</UserName>
        </Row>
    )
}
