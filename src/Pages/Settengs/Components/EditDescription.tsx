import { useRef, useEffect, useContext } from 'react'
import { Column } from '../../../Components/shared/Column.styled'
import { ChangeDescriptionHandler } from '../../../services/SettingsServices/ChangeDescriptionHandler'
import { GlobalContext } from '../../../Context/GlobalContext'
import { TextField } from '../../../Components/common/TextField.styled'
import { useTranslation } from 'react-i18next'

export const EditDescription = () => {
    const { OnDescriptionChange, value } = ChangeDescriptionHandler()


    const DescriptionRef = useRef<any>()
    const { User } = useContext(GlobalContext)
    const { t } = useTranslation()

    useEffect(() => {
        if (DescriptionRef.current) {
            DescriptionRef.current.value = User.Description
        }
    }, [])

    const resizeTextArea = () => {

        if (DescriptionRef.current.value == "") {
            DescriptionRef.current.style.height = "50px";

        } else {
            DescriptionRef.current.style.height = "auto";
            DescriptionRef.current.style.height = DescriptionRef.current.scrollHeight + "px";
        }

    }

    useEffect(resizeTextArea, [value]);
    return (

        <Column width='100%' padding='0' align='center'>
            <TextField ref={DescriptionRef} IsValidValue={true} onChange={OnDescriptionChange} placeholder={t("post_writeSomething")}

            />
        </Column>
    )
}
