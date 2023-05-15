import { Wrapper } from '../../../../Components/shared/Wrapper'
import { TitleInput } from '../../styled/TitleInput.styled'
import { CollectionsColorsData } from '../CollectionColors/CollectionsColorsData'

interface Props {
    ColorIndex: number
    setTitle: any
    setTagline: any
}
export const CollectionTitle = (props: Props) => {
    return (
        <Wrapper style={{ background: CollectionsColorsData[props.ColorIndex], padding: "10px" }}>
            <TitleInput onChange={(e) => props.setTitle(e.target.value)} style={{ fontSize: "1.5rem" }} type={"text"} placeholder='Title' />
            <TitleInput onChange={(e) => props.setTagline(e.target.value)} type={"text"} placeholder='Tag line' />
        </Wrapper>
    )
}
