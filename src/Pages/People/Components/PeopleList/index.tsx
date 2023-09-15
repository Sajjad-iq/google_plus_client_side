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
import { More } from './styled/More.styled'
import { Observing, seeMore } from '../../utils'

export const PeopleList = () => {

    const [Response, setResponse] = useState([FindUserDef])
    const [UsersCount, setUsersCount] = useState(0)
    const [FindMoreFollowing, setFindMoreFollowing] = useState(false)
    const { SelectedButton, User } = useContext(GlobalContext)
    const { FetchAllUsersHandler, StopFetching, Loading } = FetchAllUsers(UsersCount, setResponse, Response, FindMoreFollowing)
    const BottomRef = useRef<any>()
    const { SetFindUserHandler } = SetFindUser()

    useObserver(BottomRef, () => Observing(Loading, StopFetching, FindMoreFollowing, setUsersCount, UsersCount, SelectedButton), Loading)


    useEffect(() => {
        FetchAllUsersHandler()
    }, [UsersCount, SelectedButton, FindMoreFollowing])

    useEffect(() => {
        if (SelectedButton !== 1) setFindMoreFollowing(false)
        setUsersCount(0)
    }, [SelectedButton])


    return (
        <Wrapper >

            <Row width='100%' padding='0' align='space-between' style={{ margin: SelectedButton === 2 ? "0" : "10px 0 20px 0" }}>
                <Header >{SelectedButton === 0 ? 'Suggestions for you' : SelectedButton === 1 ? `Following  ${User.Following.length}` : ''}</Header>
                <More style={{ display: !FindMoreFollowing && SelectedButton === 1 ? "flex" : "none" }} onClick={() => seeMore(setFindMoreFollowing, setResponse)}>More</More>
            </Row>


            <CardsWrapper >

                {
                    Loading ?
                        <Row style={{ background: "none" }} width='100%' padding='10px' align='center' >
                            <LoadingAnimation />
                        </Row>
                        :
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


            <div key={"PeoplePageBottom"} style={{ width: "100%", height: "1px", display: Loading ? "none" : "flex" }} ref={BottomRef}></div>

        </Wrapper>
    )
}


export default PeopleList
