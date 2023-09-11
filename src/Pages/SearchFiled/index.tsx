import { useState } from "react"
import { SearchWrapper } from "./styled/SearchWrapper.styled"
import { AddMentionServices } from "../../services/PostsServices/MentionServices"
import { SearchNavigation } from "./Components/SearchNavigation"
import { SpecialCollection } from "./Components/SpecialCollection"
import { FetchCollections } from "../../services/Collections/FetchCollections"
import { UserData } from "../../services/LocalStorage/UserData"
import { SpecialCommunities } from "./Components/SpecialCommunities"



export const SearchPage = () => {

    const [SearchWord, setSearchWord] = useState("")
    const User = UserData()
    const [IsValid, setIsValid] = useState(true)
    const { FetchCollectionsHandler, CollectionsLoading, CollectionsResponse } = FetchCollections({ CollectionOwnerId: User._id }, 1)

    const { FindMentionedUserHandler, MentionResponse, isMentionLoading } = AddMentionServices()

    /*     useEffect(() => {
            const timer = setTimeout(() => {
                FindMentionedUserHandler(SearchWord)
            }, 1000);
            return () => clearTimeout(timer);
        }, [SearchWord]); */


    // use cancel token
    return (
        <SearchWrapper >
            <SearchNavigation IsValid={IsValid} setSearchWord={setSearchWord} />
            <SpecialCollection FetchCollectionsHandler={FetchCollectionsHandler} CollectionsResponse={CollectionsResponse} />
            <SpecialCommunities />
        </SearchWrapper>
    )
}


export default SearchPage
