
import { useContext, useEffect, useState } from "react"
import { Container } from "../../../../../../Components/common/Container.styled"
import { SmallAddUserCard } from "../../../../../../Components/shared/SmallAddUserCard"
import { GlobalContext } from "../../../../../../Context/GlobalContext"
import { Selectors } from "./components/selectors"
import { GrayBox } from "./styled/GrayBox"
import { CardsWrapper } from "../../../../../People/Components/PeopleList/styled/CardsWrapper"
import { UserCard } from "../../../../../../Components/shared/UserCard"
import { FetchCollections } from "../../../../../../services/Collections/FetchCollections"
import { UserData } from "../../../../../../services/LocalStorage/UserData"
import { Header } from "../../../../../../Components/common/Header.styled"
import { H2 } from "../../../../../../Components/common/H1.styled"


export const CollectionsSelect = () => {

    const { OptionsValue, setSpecificCollection } = useContext(GlobalContext)
    const User = UserData()
    const [isActive, setIsActive] = useState(false)
    const { FetchCollectionsHandler, CollectionsResponse } = FetchCollections({ CollectionOwnerId: User._id }, 2)

    useEffect(() => {
        if (OptionsValue === "Collections") setIsActive(true)
    }, [OptionsValue])

    useEffect(() => {
        FetchCollectionsHandler()
    }, [])

    return (
        <Container display={isActive ? "flex" : "none"}>
            <GrayBox >
                <H2 style={{ margin: "15px 0" }}>Select from Your Collections..</H2>
                <CardsWrapper>
                    {
                        CollectionsResponse.map((e) => {
                            return e._id !== "" ?
                                <UserCard
                                    IsLoading={false}
                                    onClick={() => ""}
                                    key={e._id}
                                    UserName={e.CollectionTitle}
                                    UserImg={e.CollectionsCoverPicture}
                                    IsForSearch={false}
                                    description={e.Tagline}
                                    Followers={[]}
                                    ConvertToCollectionCard={true}
                                    Color={e.Color}
                                    OnClickAdd={() => {
                                        setIsActive(false)
                                        setSpecificCollection(e)
                                    }}
                                />
                                :
                                null
                        })
                    }
                </CardsWrapper>

            </GrayBox>
        </Container >
    )
}
