import { Row } from '../../../../../../Components/shared/Row.styled'
import { Button } from '../../../../../../Components/common/Button.styled'
import checkMark from '../../../../../../assets/ICONS/checkmark-double-svgrepo-com.svg'
import { OptionButtonAndOptionsWindow } from '../../../../../../Components/shared/DropDownOptions/Components/OptionButtonAndOptionsWindow'
import { BorderButton } from '../../../../../../Components/common/BorderButton.styled'
export const NotificationsButtons = () => {
    return (
        <Row width='fit-content' padding='0 15px' align='center' style={{ background: "transparent" }}>

            <Button style={{ marginRight: "20px" }}><img style={{ width: "25px" }} src={checkMark} alt="nav" /></Button>

            <OptionButtonAndOptionsWindow
                children={
                    <BorderButton>Clear All</BorderButton>
                }
                bottom='-40px'
            />
        </Row>
    )
}
