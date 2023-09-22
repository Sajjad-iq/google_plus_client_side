import { Input } from '../../styled/Input.styled'
import { BackButton } from '../../../../Components/shared/BackButton'
import { SearchNav } from '../../styled/SearchNav.styled'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface Props {
    IsValid: boolean
    onChange: any
}
export const SearchNavigation = (props: Props) => {

    const Navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <SearchNav >
            <BackButton style={{ margin: '0 15px' }} onClick={() => Navigate("/")} color='gray' />
            <Input IsValidValue={props.IsValid} onChange={props.onChange} placeholder={t("search")} />
        </SearchNav>
    )
}
