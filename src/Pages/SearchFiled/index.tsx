import { useEffect, useState } from "react"
import { SearchWrapper } from "./styled/SearchWrapper.styled"
import { SearchNavigation } from "./Components/SearchNavigation"
import { SpecialCollection } from "./Components/SpecialCollection"
import { UserData } from "../../services/LocalStorage/UserData"
import { SpecialCommunities } from "./Components/SpecialCommunities"
import { SpecialUsers } from "./Components/SpecialUsers"
import { SpecialPosts } from "./Components/SpecialPosts"
import { Suggestions } from "../../services/SearchServices/Suggestions"
import { SearchDef } from "./Components/SpecialPosts/types"
import { Searching } from "../../services/SearchServices/Searching"



export const SearchPage = () => {

    const [SearchWord, setSearchWord] = useState("")
    const User = UserData()
    const [IsValid, setIsValid] = useState(true)
    const [Response, setResponse] = useState<any>(SearchDef)
    const { FetchSuggestions } = Suggestions(setResponse)
    const { onChange, FindUserHandler } = Searching(SearchWord, setSearchWord, setIsValid, setResponse)

    useEffect(() => {
        if (SearchWord !== "") {
            const timer = setTimeout(() => {
                FindUserHandler()
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [SearchWord]);


    useEffect(() => {
        FetchSuggestions()
    }, []);

    // use cancel token
    return (
        <SearchWrapper >
            <SearchNavigation IsValid={IsValid} onChange={onChange} />
            <SpecialUsers UsersResponse={Response.Accounts} />
            <SpecialPosts Response={Response.Posts} />
            <SpecialCollection CollectionsResponse={Response.Collections} />
            <SpecialCommunities />
        </SearchWrapper>
    )
}

export default SearchPage
