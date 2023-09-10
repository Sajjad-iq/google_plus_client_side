import { useContext, useEffect } from 'react'
import { Row } from '../../../../Components/shared/Row.styled'
import { More } from '../../../People/Components/PeopleList/styled/More.styled'
import { Header } from '../../../People/Components/PeopleList/styled/Header.styled'
import { Column } from '../../../../Components/shared/Column.styled'
import { CollectionsCardWrapper } from '../../../Collections/styled/CollectionsCardWrapper.styled'
import { useNavigate } from 'react-router-dom'
import { CollectionSingleCard } from '../../../Collections/Components/CollectionSingleCard'
import { GlobalContext } from '../../../../Context/GlobalContext'


interface Props {
    FetchCollectionsHandler: any
    CollectionsResponse: any
}
export const SpecialCollection = (props: Props) => {

    const { setSpecificCollection } = useContext(GlobalContext)
    const Navigate = useNavigate()

    useEffect(() => {
        props.FetchCollectionsHandler()
    }, [])


    return (
        <Column width='100%' padding='0' align='center'>

            <Row width='100%' padding='10px' align='space-between' style={{ background: 'none' }}>
                <Header >SpecialCollection</Header>
                <More>More</More>
            </Row>

            <CollectionsCardWrapper >
                {
                    props.CollectionsResponse.map((e: any) => {
                        return <CollectionSingleCard
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
                    })
                }
            </CollectionsCardWrapper>
        </Column>




    )
}
