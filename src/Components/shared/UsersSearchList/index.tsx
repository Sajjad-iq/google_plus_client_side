import { useContext } from 'react'
import { CommentsContext } from '../../../Context/CommentsContext'
import { Column } from '../Column.styled'
import { SmallUserCard } from './Components/SmallUserCard/index'
import React from 'react'

interface Props {
    Response: any
    IsLoading: boolean
    isActive: boolean
    setIsActive: any
    inputRef: any
}
export const UsersSearchList = (props: Props) => {
    const { setReplayTo, setReplayToId } = useContext(CommentsContext)

    return (
        <Column style={{ display: props.isActive ? "flex" : "none" }} width='100%' padding='0' align='flex-start' >
            {
                props.IsLoading && !props.Response ? null :
                    props.Response.map((e: any) => {
                        return <SmallUserCard forSearch={false} onClick={() => {
                            setReplayToId(e._id)
                            setReplayTo(`${e.UserName} ${e.FamilyName}`)
                            props.setIsActive(false)
                            if (props.inputRef) props.inputRef.current.value = ""
                        }} key={e._id} UserImage={e.ProfilePicture} UserName={`${e.UserName} ${e.FamilyName}`} />
                    })
            }
        </Column>
    )
}
