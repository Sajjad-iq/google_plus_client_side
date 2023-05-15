import React, { useEffect, useState } from 'react'
import { CollectionSingleCard } from '../CollectionSingleCard'
import { CollectionsCardWrapper } from '../../styled/CollectionsCardWrapper.styled'
import { FetchCollections } from '../../../../services/Collections/FetchCollections'
import { LoadingAnimation } from '../../../../Components/shared/LoadingAnimation'
import { Row } from '../../../../Components/shared/Row.styled'

export const CollectionsCards = () => {

    const [CollectionsCount, setCollectionsCount] = useState(10)
    const { FetchCollectionsHandler, StopFetchingCollections, CollectionsLoading, setCollectionsLoading, CollectionsResponse } = FetchCollections(CollectionsCount, {})

    useEffect(() => {
        FetchCollectionsHandler()
    }, [CollectionsCount])
    return (
        <CollectionsCardWrapper >

            {
                CollectionsLoading ?
                    <Row style={{ display: CollectionsLoading ? "flex" : "none", background: "none" }} width='100%' padding='10px' align='center' >
                        <LoadingAnimation />
                    </Row>
                    :
                    CollectionsResponse.map((e) => {
                        return e._id !== "" ? <CollectionSingleCard
                            CollationCoverImage={e.CollectionsCoverPicture}
                            CollationOwnerName={e.CollectionOwnerName}
                            CollationName={e.CollectionTitle}
                            CollationUserImage={e.CollectionOwnerImage}
                            key={e._id}
                            Color={e.Color}
                            OwnerId={e.CollectionOwnerId}
                            IsForProfile={false}
                            Followers={e.CollectionFollowing}
                        />
                            :
                            null
                    })
            }

        </CollectionsCardWrapper>
    )
}
