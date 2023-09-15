import { useNavigate } from "react-router-dom"
import { Row } from "../../../../Components/shared/Row.styled"
import { UserCard } from "../../../../Components/shared/UserCard"
import { Wrapper } from "../../../../Components/shared/Wrapper"
import { SetFindUser } from "../../../../services/PeopleServices/SetFindUser"
import { CardsWrapper } from "../../../People/Components/PeopleList/styled/CardsWrapper"
import { Header } from "../../../People/Components/PeopleList/styled/Header.styled"
import { More } from "../../../People/Components/PeopleList/styled/More.styled"


interface Props {
    UsersResponse: any
}

export const SpecialUsers = (props: Props) => {

    const { SetFindUserHandler } = SetFindUser()
    const Navigate = useNavigate()


    return (
        <Wrapper style={{ display: props.UsersResponse.length !== 0 ? "flex" : "none", background: "none" }}>

            <Row width='100%' padding='10px' align='space-between' style={{ background: 'none' }}>
                <Header >Suggested People & Pages</Header>
                <More onClick={() => Navigate("/People/")}>More</More>
            </Row>

            <CardsWrapper style={{ minHeight: "auto" }}>

                {
                    props.UsersResponse.map((e: any) => {
                        return <UserCard
                            style={{ margin: "0", padding: "5px 10px" }}
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

                    })
                }

            </CardsWrapper>


        </Wrapper >


    )
}
