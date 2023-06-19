import { useEffect, useState } from "react"
import { Row } from "../../../../Components/shared/Row.styled"
import { FindUser } from "../../../../services/SearchServices/FindUser"
import { SearchResults } from "./Components/SearchResults"
import { Button } from "./styled/Button.styled"
import { Column } from "./styled/Column.styled"
import { Input } from "./styled/Input.styled"
import { SearchWrapper } from "./styled/SearchWrapper.styled"
import { AddMentionServices } from "../../../../services/PostsServices/MentionServices"

interface Props {
    isActive: boolean
    setIsActive: any
}

export const SearchFiled = (props: Props) => {

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
        <SearchWrapper style={{ display: props.isActive ? "flex" : "none", zIndex: "30" }}>
            <Column >
                <Row width="100%" padding="0" align="center" style={{ position: "relative", background: "none" }}>
                    <Input IsValidValue={IsValid} onChange={(e) => setSearchWord(e.target.value)} placeholder="Search.." />
                    <Button onClick={() => props.setIsActive(!props.isActive)}>X</Button>
                </Row>

                <SearchResults response={MentionResponse} />
            </Column>
        </SearchWrapper>
    )
}
