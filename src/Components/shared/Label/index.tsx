import { useTranslation } from 'react-i18next'
import { Header } from '../../common/Header.styled'
import { LabelWrapper } from '../../common/LabelWrapper.styled'
import { LOGO } from '../../common/LOGO.styled'


interface Props {
    Header: string
    ForSignIn: boolean
}
export const Label = (props: Props) => {
    const { t } = useTranslation()

    return (
        <LabelWrapper forSignIn={props.ForSignIn}>
            <LOGO>{t("GooglePlus")}</LOGO>
            <Header>
                {props.Header}
            </Header>
        </LabelWrapper>
    )
}
