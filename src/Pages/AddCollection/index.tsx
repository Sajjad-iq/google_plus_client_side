import { WindowWrapper } from '../Home/Components/PopUpAddPostWindow/styled/WindowWrapper'
import { PostBody } from '../Home/Components/PopUpAddPostWindow/styled/PostBody.styled'
import { CollectionNav } from './Components/CollectionNav'
import { CollectionAddCoverImage } from './Components/CollectionAddCoverImage'
import { CollectionTitle } from './Components/CollectionTitle'
import { CollectionColors } from './Components/CollectionColors'
import { AddCollections } from '../../services/Collections/AddCollection'



export const AddCollectionPage = () => {

    const { Tagline, Title, AddCollectionHandler, ColorIndex, setColorIndex, setTitle, setTagline, Image, setImage, isLoading } = AddCollections()

    return (
        <WindowWrapper display={"flex"}>

            <PostBody style={{ borderRadius: "3px", padding: "0", position: "relative" }}>
                <CollectionNav loading={isLoading} onSubmit={AddCollectionHandler} />
                <CollectionAddCoverImage CollectionImage={Image} setImage={setImage} />
                <CollectionTitle Tagline={Tagline} Title={Title} setTitle={setTitle} setTagline={setTagline} ColorIndex={ColorIndex} />
                <CollectionColors ColorIndex={ColorIndex} setColorIndex={setColorIndex} />
            </PostBody>

        </WindowWrapper>

    )
}
