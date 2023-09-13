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
import { LoadingAnimation } from "../../Components/shared/LoadingAnimation"
import { Row } from "../../Components/shared/Row.styled"
import { P } from "../../Components/common/P.styled"
import { Column } from "../../Components/shared/Column.styled"



export const SearchPage = () => {

    const [SearchWord, setSearchWord] = useState("")
    const User = UserData()
    const [IsValid, setIsValid] = useState(true)
    const [Response, setResponse] = useState<any>(SearchDef)
    const [IsLoading, setIsLoading] = useState(true)
    const { FetchSuggestions } = Suggestions(setResponse, setIsLoading)
    const { onChange, FindUserHandler } = Searching(SearchWord, setSearchWord, setIsValid, setResponse, setIsLoading)

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

            {IsLoading ?
                <Row style={{ background: "none" }} width='100%' padding='10px' align='center' >
                    <LoadingAnimation />
                </Row>
                :
                <Column width='100%' padding='0px' align='center'>
                    <SpecialUsers UsersResponse={Response.Accounts} />
                    <SpecialPosts Response={Response.Posts} />
                    <SpecialCollection CollectionsResponse={Response.Collections} />
                </Column>
            }

        </SearchWrapper>

    )
}

export default SearchPage
