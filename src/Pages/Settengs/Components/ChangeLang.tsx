import React, { useContext } from 'react'
import { Column } from '../../../Components/shared/Column.styled'
import { useTranslation } from 'react-i18next'
import { GlobalContext } from '../../../Context/GlobalContext'

export const ChangeLang = () => {

    const { setOptionsValue } = useContext(GlobalContext)
    const { t } = useTranslation()
    return (
        <Column width='100%' padding='30px 0' align='flex-start'>
            <select id="PostOption" onChange={(e) => setOptionsValue(e.target.value)}>
                <option value="Public">{t("post_state_public")}</option>
                <option value="Private">{t("post_state_private")}</option>
                <option value="Collections">{t("post_state_collection")}</option>
            </select>
        </Column>
    )
}
