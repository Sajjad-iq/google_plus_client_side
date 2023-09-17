import { ChangeEventHandler, useEffect } from "react"
import { TextAreaComponent } from "./TextArea.styled"
import { useTranslation } from "react-i18next"
interface Props {
    TextValue: string
    onChange: ChangeEventHandler
    Ref: any
}
export const TextArea = (props: Props) => {

    const { t } = useTranslation()

    const resizeTextArea = () => {
        if (props.Ref.current.value == "") {
            props.Ref.current.style.height = "50px";

        } else {
            props.Ref.current.style.height = "auto";
            props.Ref.current.style.height = props.Ref.current.scrollHeight + "px";
        }

    }

    useEffect(resizeTextArea, [props.TextValue]);


    return (
        <TextAreaComponent ref={props.Ref} onChange={props.onChange} placeholder={t("post_writeSomething")} required />
    )
}
