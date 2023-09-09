import { FindUserDef } from "../../Context/GlobalContext"

export const Observing = (Loading: boolean, StopFetching: boolean, FindMoreFollowing: boolean, setUsersCount: any, UsersCount: number, SelectedButton: number) => {
    if (!Loading && !StopFetching && !FindMoreFollowing && SelectedButton !== 1) {
        setUsersCount(UsersCount + 10)
    } else if (!Loading && !StopFetching && FindMoreFollowing && SelectedButton === 1) {
        setUsersCount(UsersCount + 10)
    }
}
export const seeMore = (setFindMoreFollowing: any, setResponse: any) => {
    setFindMoreFollowing(true)
    setResponse([FindUserDef, FindUserDef])
} 