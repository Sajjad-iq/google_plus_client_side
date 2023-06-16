import React from 'react'
import { Row } from '../../../Row.styled'
import { UserName } from '../../../../common/UserName.styled'
import { CommentUserLogo } from '../../../AddComment/styled/CommentUserLogo.styled'
import Image from '../../../../../assets/ICONS/ProfileImg.jpg'
import { Colors } from '../../../../../assets/Colors'

interface Props {
    UserName: string
    UserImage: string
    onClick: any
}
export const SmallUserCard = (props: Props) => {
    return (
        <Row onClick={props.onClick} width='100%' padding='0' align='flex-start'>
            <CommentUserLogo onClick={() => ""} src={props.UserImage !== "" ? props.UserImage : Image} alt='comment image label' style={{ width: "20px", height: "20px", margin: "3px" }} />
            <UserName style={{ color: Colors.Secoundry.Cyan, fontSize: "0.6rem" }} onClick={() => ""} IsCommentUserName={true} >{props.UserName}</UserName>
        </Row>
    )
}
