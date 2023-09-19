import { UserData } from '../../../../../services/LocalStorage/UserData'
import { DeleteComments } from '../../../../../services/PostsServices/DeleteComments'
import { Dispatch, SetStateAction, useContext, useEffect, useRef } from 'react'
import { CommentsContext } from '../../../../../Context/CommentsContext'
import { Colors } from '../../../../../assets/Colors'
import { ToggleColumn } from '../../styled/ToggleColumn.styled'
import { OptionsButton } from '../../../DropDownOptions/styled/OptionsButton.styled'
import { useTranslation } from 'react-i18next'

interface Props {
    IsActive: boolean
    setIsActive: Dispatch<SetStateAction<boolean>>
    data: any
    EditWindowStateChange: Dispatch<SetStateAction<boolean>>
}

export const OptionsWindow = (props: Props) => {

    let User = UserData()
    const { DeleteCommentsHandler } = DeleteComments()
    const { setReplayTo, setReplayToId } = useContext(CommentsContext)
    const OptionsRef = useRef<any>()
    const { t } = useTranslation()

    const closeCommentMenu = (e: any) => { if (!OptionsRef.current?.contains(e.target)) props.setIsActive(false) }


    useEffect(() => {
        document.body.addEventListener("mousedown", closeCommentMenu, true)
        return () => document.removeEventListener("mousedown", closeCommentMenu)
    }, [props.setIsActive])


    return (
        <ToggleColumn ref={OptionsRef} bottom={props.data.CommentOwnerId == User._id ? "-100px" : "-70px"} display={props.IsActive ? "flex" : "none"}  >

            <OptionsButton style={{ color: Colors.Primary.red, width: "75px", display: props.data.CommentOwnerId == User._id ? "flex" : "none" }}
                onClick={() => { DeleteCommentsHandler(props.data) }}
            >
                {t("post_delete")}
            </OptionsButton>

            <OptionsButton style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "flex" : "none" }}
                onClick={() => { props.EditWindowStateChange(e => e = !e) }}
            >
                {t("post_edit")}
            </OptionsButton>

            <OptionsButton
                style={{ width: "75px" }}
                onClick={() => {
                    setReplayTo(`+ ${props.data.CommentOwnerName} `)
                    setReplayToId(props.data.CommentOwnerId)
                }}
            >  {t("post_replay")}
            </OptionsButton>
            <OptionsButton style={{ width: "75px", display: props.data.CommentOwnerId == User._id ? "none" : "flex" }}>{t("post_report")}</OptionsButton>
        </ToggleColumn>

    )
}