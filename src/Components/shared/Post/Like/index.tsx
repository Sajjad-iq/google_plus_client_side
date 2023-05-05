import { useState } from 'react'
import { Colors } from '../../../../assets/Colors'
import { Count } from '../../../../Components/common/Count.styled'
import { PostButton } from '../../../../Components/common/PostButton.styled'
import { Row } from '../../../../Components/shared/Row.styled'

interface Props {
    LikesCount: number
    onHitLike: any,
    IsUserHitLike: boolean
    IsForPreviewWindow: boolean
}

export const Like = (props: Props) => {

    const [IsActive, setIsActive] = useState(props.IsUserHitLike)

    return (
        props.IsForPreviewWindow ?

            <Row padding='0' width='auto' align='center'>
                <PostButton
                    color={props.IsUserHitLike ? Colors.Primary.white : Colors.Secoundry.gray}
                    backgroundColor={props.IsUserHitLike ? Colors.Primary.red : Colors.Primary.Lightgray}
                    onClick={() => {
                        props.onHitLike()
                    }
                    }
                >+1</PostButton>
                <Count>{props.LikesCount}</Count>
            </Row>

            :

            <Row padding='0' width='auto' align='center'>
                <PostButton
                    color={IsActive ? Colors.Primary.white : Colors.Secoundry.gray}
                    backgroundColor={IsActive ? Colors.Primary.red : Colors.Primary.Lightgray}
                    onClick={() => {
                        props.onHitLike()
                        setIsActive(!IsActive)
                    }
                    }
                >+1</PostButton>
                <Count>{props.LikesCount}</Count>
            </Row>

    )
}
