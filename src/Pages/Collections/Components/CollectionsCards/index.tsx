import React from 'react'
import { Wrapper } from '../../../../Components/shared/Wrapper'
import { CollectionSingleCard } from '../CollectionSingleCard'
import UserImage from '../../../../assets/ICONS/ProfileImg.jpg'
import CoverImage from '../../../../assets/ICONS/Photos/marguerite-729510__340.jpg'

export const CollectionsCards = () => {
    return (
        <Wrapper style={{ justifyContent: "flex-start", overflow: "scroll", height: "calc(100% - 60px)" }}>

            <CollectionSingleCard
                CollationCoverImage={CoverImage}
                CollationDescription='Few songs'
                CollationName='Sajjad'
                CollationUserImage={UserImage}
            />
            <CollectionSingleCard
                CollationCoverImage={CoverImage}
                CollationDescription='Few songs'
                CollationName='Sajjad'
                CollationUserImage={UserImage}
            />
            <CollectionSingleCard
                CollationCoverImage={CoverImage}
                CollationDescription='Few songs'
                CollationName='Sajjad'
                CollationUserImage={UserImage}
            />  <CollectionSingleCard
                CollationCoverImage={CoverImage}
                CollationDescription='Few songs'
                CollationName='Sajjad'
                CollationUserImage={UserImage}
            />  <CollectionSingleCard
                CollationCoverImage={CoverImage}
                CollationDescription='Few songs'
                CollationName='Sajjad'
                CollationUserImage={UserImage}
            />  <CollectionSingleCard
                CollationCoverImage={CoverImage}
                CollationDescription='Few songs'
                CollationName='Sajjad'
                CollationUserImage={UserImage}
            />  <CollectionSingleCard
                CollationCoverImage={CoverImage}
                CollationDescription='Few songs'
                CollationName='Sajjad'
                CollationUserImage={UserImage}
            />
        </Wrapper>
    )
}
