import { useContext } from 'react'
import "./styles.css"
import { GlobalContext } from '../../../../../../Context/GlobalContext'
import { useTranslation } from 'react-i18next'

export const PostStateSelectors = () => {
    const { setOptionsValue } = useContext(GlobalContext)
    const { t } = useTranslation()

    return (
        <select id="PostOption" onChange={(e) => setOptionsValue(e.target.value)}>
            <option value="Public">{t("post_state_public")}</option>
            <option value="Private">{t("post_state_private")}</option>
            <option value="Collections">{t("post_state_collection")}</option>
        </select>
    )
}
