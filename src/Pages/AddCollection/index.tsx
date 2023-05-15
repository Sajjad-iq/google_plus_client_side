import { WindowWrapper } from '../Home/Components/PopUpAddPostWindow/styled/WindowWrapper'
import { PostBody } from '../Home/Components/PopUpAddPostWindow/styled/PostBody.styled'
import { CollectionNav } from './Components/CollectionNav'
import { CollectionAddCoverImage } from './Components/CollectionAddCoverImage'
import { CollectionTitle } from './Components/CollectionTitle'
import { CollectionColors } from './Components/CollectionColors'
import { useState } from 'react'



export const AddCollectionPage = () => {

    const [ColorIndex, setColorIndex] = useState(0)
    const [Title, setTitle] = useState("")
    const [Tagline, setTagline] = useState('')
    const [Image, setImage] = useState('')


    return (
        <WindowWrapper display={"flex"}>

            <PostBody style={{ borderRadius: "3px", padding: "0", position: "relative" }}>
                <CollectionNav />
                <CollectionAddCoverImage CollectionImage={Image} setImage={setImage} />
                <CollectionTitle setTitle={setTitle} setTagline={setTagline} ColorIndex={ColorIndex} />
                <CollectionColors ColorIndex={ColorIndex} setColorIndex={setColorIndex} />
            </PostBody>

        </WindowWrapper>

    )
}
