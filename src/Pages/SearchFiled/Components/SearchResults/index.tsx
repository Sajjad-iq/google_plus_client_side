import { SmallUserCard } from "../../../../Components/shared/UsersSearchList/Components/SmallUserCard"
import { SetFindUser } from "../../../../services/PeopleServices/SetFindUser"
import { SearchResultsWrapper } from "../../styled/SearchResultsWrapper"

interface Props {
    response: any
}
export const SearchResults = (props: Props) => {
    const { SetFindUserHandler } = SetFindUser()

    return (
        <SearchResultsWrapper >
            {props.response.map((e: any) => {
                return <SmallUserCard forSearch={true} onClick={() => SetFindUserHandler(e._id)}
                    key={e._id}
                    UserImage={e.ProfilePicture}
                    UserName={`${e.UserName} ${e.FamilyName}`}
                />
            }
            )}
        </SearchResultsWrapper>
    )
}
