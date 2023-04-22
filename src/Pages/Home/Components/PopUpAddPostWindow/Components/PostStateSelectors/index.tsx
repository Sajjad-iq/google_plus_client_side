import React from 'react'
import "./styles.css"
interface Props {
    setSelectWindow: any
}
export const PostStateSelectors = (props: Props) => {
    return (
        <select id="PostOption" onChange={(e) => props.setSelectWindow(e.target.value)}>
            <option value="Public">Public</option>
            <option value="Private">private</option>
        </select>
    )
}
