import { UserLogo } from '../../common/UserLogo.styled'
import { Row } from '../Row.styled'
import { UserName } from '../../common/UserName.styled'
import { Column } from '../Column.styled'
import { CommentBody } from './styled/CommentBody.styled'
import { P } from './styled/P.styled'
import { MouseEventHandler, useState } from 'react'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../../common/Button.styled'
import './styled/style.css'
import { OptionsWindow } from './components/OptionsWindow'
import Image from '../../../assets/ICONS/ProfileImg.jpg'


interface Props {
    CreatedAt: string
    onClickOnLogo: MouseEventHandler
    data: any
}
export const SingleComment = (props: Props) => {

    const [IsActive, setIsActive] = useState(true)

    const DateCalculator = () => {
        var CreatedAt = new Date(props.CreatedAt);
        var NowDate = new Date(Date.now());
        var Difference = NowDate.getTime() - CreatedAt.getTime();
        var Difference_In_Days = Difference / (1000 * 3600 * 24);
        var Difference_In_Hours = Difference / (1000 * 3600);
        var Difference_In_Minutes = Difference / (1000 * 60);

        if (Difference_In_Minutes < 60) return `${Difference_In_Minutes.toFixed()} min`
        else if (Difference_In_Hours < 24 && Difference_In_Minutes > 60) return `${Difference_In_Hours.toFixed()} hour`
        else return `${Difference_In_Days.toFixed()} day`
    }


    return (
        <Row width='100%' padding='10px' align='flex-start' style={{ position: "relative" }}>
            <UserLogo onClick={props.onClickOnLogo} src={props.data.CommentOwnerImage !== "" ? props.data.CommentOwnerImage : Image} loading={"lazy"} alt='comment image label' />
            <Column width='80%' padding='3px' align='flex-start'>
                <UserName onClick={props.onClickOnLogo} IsCommentUserName={true} >{props.data.CommentOwnerName}</UserName>
                <CommentBody>{props.data.CommentBody}</CommentBody>
            </Column>

            <P>{DateCalculator()}</P>

            <Row width='fit-content' align='flex-start' padding='0px 15px'>
                <Button onClick={() => setIsActive(!IsActive)}>
                    <FontAwesomeIcon className='post-fa-comment-options' icon={faEllipsisVertical} />
                </Button>
            </Row>
            <OptionsWindow data={props.data} IsActive={IsActive} />
        </Row>
    )
}
