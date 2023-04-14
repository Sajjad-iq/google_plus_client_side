import { ChangeEventHandler, useEffect, useRef } from "react"
import { TextAreaComponent } from "./TextArea.styled"
interface Props {
    TextValue: string
    onChange: ChangeEventHandler
    Ref: any
}
export const TextArea = (props: Props) => {

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
        <TextAreaComponent ref={props.Ref} onChange={props.onChange} placeholder="Write something.." required />
    )
}
