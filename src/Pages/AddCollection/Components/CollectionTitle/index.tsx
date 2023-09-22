import { useEffect, useRef } from 'react'
import { Wrapper } from '../../../../Components/shared/Wrapper'
import { TitleInput } from '../../styled/TitleInput.styled'
import { CollectionsColorsData } from '../CollectionColors/CollectionsColorsData'
import { useTranslation } from 'react-i18next'

interface Props {
    ColorIndex: number
    setTitle: any
    setTagline: any
    Title: string
    Tagline: string
}
export const CollectionTitle = (props: Props) => {

    const TitleRef = useRef<any>(null)
    const TaglineRef = useRef<any>(null)
    const { t } = useTranslation()

    useEffect(() => {
        if (TitleRef.current && TaglineRef.current) {
            TitleRef.current?.focus()
            TitleRef.current.value = props.Title
            TaglineRef.current.value = props.Tagline
        }
    }, [])
    return (
        <Wrapper style={{ background: CollectionsColorsData[props.ColorIndex], padding: "10px" }}>
            <TitleInput ref={TitleRef} onChange={(e) => props.setTitle(e.target.value)} style={{ fontSize: "1.5rem" }} type={"text"} placeholder={t("title")} />
            <TitleInput ref={TaglineRef} onChange={(e) => props.setTagline(e.target.value)} type={"text"} placeholder={t("tag")} />
        </Wrapper>
    )
}
