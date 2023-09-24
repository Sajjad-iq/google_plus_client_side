import { Column } from '../../../Components/shared/Column.styled'
import { useTranslation } from 'react-i18next'
import { Header } from '../../People/Components/PeopleList/styled/Header.styled'
import i18next from 'i18next'

export const ChangeLang = () => {

    const { t } = useTranslation()
    return (
        <Column width='100%' padding='30px 0' align='flex-start'>
            <Header style={{ padding: "10px 0" }}>{t("Language")}</Header>

            <select id="PostOption" onChange={(e: any) => i18next.changeLanguage(e.target.value)}>
                <option value="ar">{t("arabic")}</option>
                <option value="en">{t("english")}</option>
            </select>
        </Column>
    )
}

