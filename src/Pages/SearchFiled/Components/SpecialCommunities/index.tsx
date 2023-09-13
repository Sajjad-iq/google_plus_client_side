import { Colors } from "../../../../assets/Colors"
import { CollectionsCardWrapper } from "../../../Collections/styled/CollectionsCardWrapper.styled"
import { CommunitiesSingleCard } from "../../../Communities/Components/CommunitiesSingleCard"
import userImg from '../../../../assets/ICONS/ProfileImg.jpg'
import Cover from '../../../../assets/ICONS/Photos/marguerite-729510__340.webp'
import { Column } from "../../../../Components/shared/Column.styled"
import { Row } from "../../../../Components/shared/Row.styled"
import { More } from "../../../People/Components/PeopleList/styled/More.styled"
import { Header } from "../../../People/Components/PeopleList/styled/Header.styled"


export const SpecialCommunities = () => {
    return (
        <Column width='100%' padding='0' align='center'>

            <Row width='100%' padding='10px' align='space-between' style={{ background: 'none' }}>
                <Header >Recommended Communities</Header>
                <More>More</More>
            </Row>

            <CollectionsCardWrapper >
                <CommunitiesSingleCard
                    onClick={() => {

                    }}
                    CollationCoverImage={Cover}
                    CollationOwnerName={`1,300 members`}
                    CollationName={"Apple"}
                    CollationUserImage={userImg}
                    key={1}
                    Color={Colors.Secoundry.Green}
                    OwnerId={""}
                    IsForProfile={true}
                    Followers={[]}
                />

                <CommunitiesSingleCard
                    onClick={() => {

                    }}
                    CollationCoverImage={Cover}
                    CollationOwnerName={`1,300 members`}
                    CollationName={"Apple"}
                    CollationUserImage={userImg}
                    key={2}
                    Color={"gray"}
                    OwnerId={""}
                    IsForProfile={true}
                    Followers={[]}
                />
            </CollectionsCardWrapper>
        </Column>
    )
}
