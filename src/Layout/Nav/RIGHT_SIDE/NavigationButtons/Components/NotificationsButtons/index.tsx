import { Row } from '../../../../../../Components/shared/Row.styled'
import { Button } from '../../../../../../Components/common/Button.styled'
import checkMark from '../../../../../../assets/ICONS/checkmark-double-svgrepo-com.svg'
import { OptionButtonAndOptionsWindow } from '../../../../../../Components/shared/DropDownOptions/Components/OptionButtonAndOptionsWindow'
import { OptionsButton } from '../../../../../../Components/shared/DropDownOptions/styled/OptionsButton.styled'
import { useTranslation } from 'react-i18next'
export const NotificationsButtons = () => {
    const { t } = useTranslation()

    return (
        <Row width='fit-content' padding='0 15px' align='center' style={{ background: "transparent" }}>

            <Button style={{ marginRight: "20px" }}><img style={{ width: "25px" }} src={checkMark} alt="nav" /></Button>

            <OptionButtonAndOptionsWindow
                children={
                    <OptionsButton>{t("clearAll")}</OptionsButton>
                }
                bottom='-40px'
            />
        </Row>
    )
}
