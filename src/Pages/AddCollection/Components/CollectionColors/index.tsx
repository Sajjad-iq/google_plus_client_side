import { CollectionsColorWrapper } from '../../styled/CollectionsColorWrapper'
import { ColorButton } from '../../styled/ColorButton.styled'
import { CollectionsColorsData } from './CollectionsColorsData'

interface Props {
    ColorIndex: number
    setColorIndex: any
}
export const CollectionColors = (props: Props) => {
    return (
        <CollectionsColorWrapper >
            {CollectionsColorsData.map((e, i) => {
                return <ColorButton key={e} isActive={props.ColorIndex === i} onClick={() => props.setColorIndex(i)} Color={e} />
            })}
        </CollectionsColorWrapper>
    )
}
