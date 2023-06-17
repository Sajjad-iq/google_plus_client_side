import { useContext, useEffect } from 'react'
import { CollectionSingleCard } from '../CollectionSingleCard'
import { CollectionsCardWrapper } from '../../styled/CollectionsCardWrapper.styled'
import { FetchCollections } from '../../../../services/Collections/FetchCollections'
import { LoadingAnimation } from '../../../../Components/shared/LoadingAnimation'
import { Row } from '../../../../Components/shared/Row.styled'
import { UserData } from '../../../../services/LocalStorage/UserData'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../../../Context/GlobalContext'
import { AddCollectionCard } from '../../../Profile/components/AddCollectionCard'
interface Props {
    SelectedButton: number
}
export const CollectionsCards = (props: Props) => {


    const User = UserData()
    const { FetchCollectionsHandler, CollectionsLoading, CollectionsResponse } = FetchCollections({ CollectionOwnerId: User._id }, props.SelectedButton)
    const { setSpecificCollection } = useContext(GlobalContext)
    const Navigate = useNavigate()

    useEffect(() => {
        FetchCollectionsHandler()
    }, [props.SelectedButton])
    return (


        <CollectionsCardWrapper >

            <AddCollectionCard />

            {
                CollectionsLoading ?
                    <Row style={{ display: CollectionsLoading ? "flex" : "none", background: "none", height: "75px" }} width='100%' padding='0' align='center' >
                        <LoadingAnimation />
                    </Row>
                    :
                    CollectionsResponse.map((e) => {
                        if (props.SelectedButton < 2) {
                            return e._id !== "" && e.CollectionOwnerId !== User._id ?
                                <CollectionSingleCard
                                    onClick={() => {
                                        Navigate("/CollectionPreview")
                                        setSpecificCollection(e)
                                    }}
                                    CollationCoverImage={e.CollectionsCoverPicture}
                                    CollationOwnerName={e.CollectionOwnerName}
                                    CollationName={e.CollectionTitle}
                                    CollationUserImage={e.CollectionOwnerImage}
                                    key={e._id}
                                    Color={e.Color}
                                    OwnerId={e.CollectionOwnerId}
                                    IsForProfile={true}
                                    Followers={e.CollectionFollowing}
                                />
                                :
                                null
                        } else {
                            return e._id !== "" ?
                                <CollectionSingleCard
                                    onClick={() => {
                                        Navigate("/CollectionPreview")
                                        setSpecificCollection(e)
                                    }}
                                    CollationCoverImage={e.CollectionsCoverPicture}
                                    CollationOwnerName={e.CollectionOwnerName}
                                    CollationName={e.CollectionTitle}
                                    CollationUserImage={e.CollectionOwnerImage}
                                    key={e._id}
                                    Color={e.Color}
                                    OwnerId={e.CollectionOwnerId}
                                    IsForProfile={true}
                                    Followers={e.CollectionFollowing}
                                />
                                :
                                null
                        }

                    })
            }

        </CollectionsCardWrapper>
    )
}
