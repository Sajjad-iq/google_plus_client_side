import { MouseEventHandler } from 'react'
import UserIMG from "../../../assets/ICONS/ProfileImg.jpg"
import { UserLogo } from '../../common/UserLogo.styled'
import { UserName } from '../../common/UserName.styled'
import { UserCardWrapper } from './styled/UserCardWrapper.styled'
import { UserCardDescription } from './styled/UserCardDescription.styled'
import { UserData } from '../../../services/LocalStorage/UserData'
import { Colors } from '../../../assets/Colors'
import { Column } from '../Column.styled'
import { Row } from '../Row.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './style.css'

interface Props {
    IsForSearch?: boolean
    UserName: string
    UserImg: string
    description: string
    onClick: MouseEventHandler
    IsLoading: boolean
    Followers: any
    OnClickAdd: MouseEventHandler
    style?: {}
}
export const UserCard = (props: Props) => {

    const User = UserData()

    return (

        <UserCardWrapper onClick={props.onClick} style={props.style}>
            <UserLogo
                src={props.UserImg !== "" ? props.UserImg : UserIMG}
            />

            <Row width='100%' padding='5px' align='center' style={{ borderBottom: `1px solid ${Colors.Primary.Lightgray}` }}>
                <Column width='100%' padding='0 5px' align='flex-start'>
                    <UserName
                        IsCommentUserName={false}
                        style={{ textAlign: "center" }}
                    >{props.UserName}
                    </UserName>

                    <UserCardDescription >
                        {props.description}
                    </UserCardDescription>
                </Column>
                <FontAwesomeIcon className='UserAddIcon' style={{ color: "blue" }} icon={props.Followers.includes(User._id) ? faCheck : faUserPlus} />

            </Row>

        </UserCardWrapper>
    )
}
