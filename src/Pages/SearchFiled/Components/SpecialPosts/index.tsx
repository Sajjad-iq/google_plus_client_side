import { Posts } from '../../../../Components/shared/Posts'
import { Row } from '../../../../Components/shared/Row.styled'
import { Wrapper } from '../../../Home/styled/Wrapper'
import { More } from '../../../People/Components/PeopleList/styled/More.styled'
import { Header } from '../../../People/Components/PeopleList/styled/Header.styled'
import { PreviewThePost } from '../../../../services/PostsServices/PreviewThePost'


interface Props {
    Response: any
}
export const SpecialPosts = (props: Props) => {

    const { onClickOnPost } = PreviewThePost()


    return (
        <Wrapper style={{ display: props.Response.length !== 0 ? "flex" : "none", background: "none" }}>

            <Row width='100%' padding='10px' align='space-between' style={{ background: 'none' }}>
                <Header >Recommended for you</Header>
                <More>More</More>
            </Row>

            <Posts
                Loading={false}
                IsForProfile={true}
                Response={props.Response}
                OnClickOnPost={onClickOnPost}
            />
        </Wrapper>

    )
}
