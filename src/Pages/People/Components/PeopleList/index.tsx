import { useContext, useEffect, useRef, useState } from 'react'
import { LoadingAnimation } from '../../../../Components/shared/LoadingAnimation'
import { Row } from '../../../../Components/shared/Row.styled'
import { UserCard } from '../../../../Components/shared/UserCard'
import { useObserver } from '../../../../services/observer/useObserver'
import { FetchAllUsers } from '../../../../services/PeopleServices/FetchAllUsers'
import { SetFindUser } from '../../../../services/PeopleServices/SetFindUser'
import { Header } from './styled/Header.styled'
import { Wrapper } from './styled/Wrapper'
import { CardsWrapper } from './styled/CardsWrapper'
import { FindUserDef, GlobalContext } from '../../../../Context/GlobalContext'

export const PeopleList = () => {

    const [Response, setResponse] = useState([FindUserDef])
    const [PostsCount, setPostsCount] = useState(0)
    const { SelectedButton, User } = useContext(GlobalContext)
    const { FetchAllUsersHandler, StopFetching, Loading } = FetchAllUsers(PostsCount, setResponse, Response)
    const BottomRef = useRef<any>()
    const observer = useObserver(BottomRef, () => !Loading && !StopFetching ? setPostsCount(PostsCount + 10) : null, Loading)
    const { SetFindUserHandler } = SetFindUser()

    useEffect(() => {
        FetchAllUsersHandler()
    }, [PostsCount, SelectedButton])

    return (
        <Wrapper >

            <Header>Suggestions for you</Header>

            <CardsWrapper>

                {
                    Response.map((e) => {
                        return e._id !== "" && e._id !== User._id ?
                            <UserCard
                                IsLoading={false}
                                onClick={() => SetFindUserHandler(e._id)}
                                key={e._id}
                                UserName={`${e.UserName} ${e.FamilyName}`}
                                UserImg={e.ProfilePicture}
                                IsForSearch={false}
                                description={e.Description}
                                Followers={e.Followers}
                                OnClickAdd={() => ""}
                            />
                            :
                            null
                    })
                }

            </CardsWrapper>

            <Row style={{ display: Loading ? "flex" : "none", background: "none" }} width='100%' padding='10px' align='center' >
                <LoadingAnimation />
            </Row>

            <div key={"PeoplePageBottom"} style={{ width: "100%", height: "1px", display: Loading ? "none" : "flex" }} ref={BottomRef}></div>

        </Wrapper>
    )
}


export default PeopleList
