import { SmallUserCard } from "../../../../../../Components/shared/UsersSearchList/Components/SmallUserCard"
import { SearchResultsWrapper } from "../../styled/SearchResultsWrapper"

interface Props {
    response: any
}
export const SearchResults = (props: Props) => {

    return (
        <SearchResultsWrapper>
            {props.response.map((e: any) => {
                return <SmallUserCard forSearch={true} onClick={() => "props.setIsActive(false)"}
                    key={e._id}
                    UserImage={e.ProfilePicture}
                    UserName={`${e.UserName} ${e.FamilyName}`}
                />
            }
            )}
        </SearchResultsWrapper>
    )
}
