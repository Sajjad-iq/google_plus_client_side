import { Row } from '../../../../../../Components/shared/Row.styled'
import { OptionButtonAndOptionsWindow } from '../../../../../../Pages/Profile/components/OptionButtonAndOptionsWindow'
import { Button } from '../../../../../../Components/common/Button.styled'
import checkMark from '../../../../../../assets/ICONS/checkmark-double-svgrepo-com.svg'
export const NotificationsButtons = () => {
    return (
        <Row width='fit-content' padding='0 15px' align='center' style={{ background: "transparent" }}>

            <Button style={{ marginRight: "20px" }}><img style={{ width: "25px" }} src={checkMark} alt="nav" /></Button>

            <OptionButtonAndOptionsWindow />
        </Row>
    )
}
