import { useEffect, useState } from "react"
import { SearchResults } from "./Components/SearchResults"
import { Column } from "./styled/Column.styled"
import { Input } from "./styled/Input.styled"
import { SearchWrapper } from "./styled/SearchWrapper.styled"
import { AddMentionServices } from "../../services/PostsServices/MentionServices"



export const SearchPage = () => {

    const [SearchWord, setSearchWord] = useState("")
    const [IsValid, setIsValid] = useState(true)

    const { FindMentionedUserHandler, MentionResponse, isMentionLoading } = AddMentionServices()

    useEffect(() => {
        const timer = setTimeout(() => {
            FindMentionedUserHandler(SearchWord)
        }, 1000);
        return () => clearTimeout(timer);
    }, [SearchWord]);


    // use cancel token
    return (
        <SearchWrapper >
            <Column >
                <Input IsValidValue={IsValid} onChange={(e) => setSearchWord(e.target.value)} placeholder="Search.." />

                <SearchResults response={MentionResponse} />
            </Column>
        </SearchWrapper>
    )
}
