import React, { useEffect, useState } from 'react'
import { CollectionSingleCard } from '../CollectionSingleCard'
import { CollectionsCardWrapper } from '../../styled/CollectionsCardWrapper.styled'
import { FetchCollections } from '../../../../services/Collections/FetchCollections'
import { LoadingAnimation } from '../../../../Components/shared/LoadingAnimation'
import { Row } from '../../../../Components/shared/Row.styled'
import { UserData } from '../../../../services/LocalStorage/UserData'
import { CollectionsDef } from '../../../../Context/GlobalContext'
interface Props {
    SelectedButton: number
}
export const CollectionsCards = (props: Props) => {


    const User = UserData()
    const { FetchCollectionsHandler, CollectionsLoading, setCollectionsLoading, CollectionsResponse } = FetchCollections({ CollectionOwnerId: User._id }, props.SelectedButton)


    useEffect(() => {
        FetchCollectionsHandler()
    }, [props.SelectedButton])
    return (


        <CollectionsCardWrapper >

            {
                CollectionsLoading ?
                    <Row style={{ display: CollectionsLoading ? "flex" : "none", background: "none" }} width='100%' padding='10px' align='center' >
                        <LoadingAnimation />
                    </Row>
                    :
                    CollectionsResponse.map((e) => {
                        if (props.SelectedButton < 2) {
                            return e._id !== "" && e.CollectionOwnerId !== User._id ? <CollectionSingleCard
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
                            return e._id !== "" ? <CollectionSingleCard
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
