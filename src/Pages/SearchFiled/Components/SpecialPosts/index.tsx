import { Posts } from '../../../../Components/shared/Posts'
import { Row } from '../../../../Components/shared/Row.styled'
import { Wrapper } from '../../../Home/styled/Wrapper'
import { More } from '../../../People/Components/PeopleList/styled/More.styled'
import { Header } from '../../../People/Components/PeopleList/styled/Header.styled'
import { PreviewThePost } from '../../../../services/PostsServices/PreviewThePost'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


interface Props {
    Response: any
}
export const SpecialPosts = (props: Props) => {

    const { onClickOnPost } = PreviewThePost()
    const Navigate = useNavigate()
    const { t } = useTranslation()


    return (
        <Wrapper style={{ display: props.Response.length !== 0 ? "flex" : "none", background: "none" }}>

            <Row width='100%' padding='10px' align='space-between' style={{ background: 'none' }}>
                <Header >{t("Suggestions_for_you")}</Header>
                <More onClick={() => Navigate("/")}>{t("MORE")}</More>
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
