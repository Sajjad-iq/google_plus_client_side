import { useTranslation } from "react-i18next"
import { CheckInput } from "../../common/CheckInput.styled"
import { Label } from "../../common/Label.styled"
import { P } from "../../common/P.styled"

interface Props {
    IsChecked: boolean
    setIsChecked: any
}
export const CheckBox = (props: Props) => {
    const { t } = useTranslation()

    return (
        <Label>
            <CheckInput type={"checkbox"} onChange={() => props.setIsChecked(!props.IsChecked)} />
            <P>{t("ShowPass")}</P>
        </Label>
    )
}
