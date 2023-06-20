import { CollectionAddCoverImage } from '../../../AddCollection/Components/CollectionAddCoverImage'
import { CollectionColors } from '../../../AddCollection/Components/CollectionColors'
import { CollectionNav } from '../../../AddCollection/Components/CollectionNav'
import { CollectionTitle } from '../../../AddCollection/Components/CollectionTitle'
import { PostBody } from '../../../Home/Components/PopUpAddPostWindow/styled/PostBody.styled'
import { WindowWrapper } from '../../../Home/Components/PopUpAddPostWindow/styled/WindowWrapper'
import { EditCollectionService } from '../../../../services/Collections/EditCollectionService'
import { Colors } from '../../../../assets/Colors'


export const EditCollections = () => {

    const { Tagline, Title, EditCollectionHandler, ColorIndex, setColorIndex, setTitle, setTagline, Image, setImage, isLoading } = EditCollectionService()

    return (
        <WindowWrapper display={"flex"} style={{ background: Colors.Primary.Lightgray }}>

            <PostBody style={{ borderRadius: "3px", padding: "0", position: "relative" }}>
                <CollectionNav Header='Edit Collection' loading={isLoading} onSubmit={EditCollectionHandler} />
                <CollectionAddCoverImage CollectionImage={Image} setImage={setImage} />
                <CollectionTitle Tagline={Tagline} Title={Title} setTitle={setTitle} setTagline={setTagline} ColorIndex={ColorIndex} />
                <CollectionColors ColorIndex={ColorIndex} setColorIndex={setColorIndex} />
            </PostBody>

        </WindowWrapper>
    )
}
