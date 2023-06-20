import { useContext, useEffect } from "react"
import { CoverImages } from "../../../../Components/shared/CoverImages"
import { Posts } from "../../../../Components/shared/Posts"
import { UserInfo } from "../../../../Components/shared/UserInfo"
import { GlobalContext } from "../../../../Context/GlobalContext"
import { FollowCollection } from "../../../../services/Collections/FollowCollection"
import { FetchPostsHandler } from "../../../../services/PostsServices/FetchPosts"
import { PreviewThePost } from "../../../../services/PostsServices/PreviewThePost"
import { RedPenButton } from "../../../Home/Components/RedPenButton"
import { Wrapper } from "../../../Home/styled/Wrapper"
import UserIMG from '../../../../assets/ICONS/ProfileImg.jpg'
import CoverIMG from '../../../../assets/ICONS/Photos/marguerite-729510__340.jpg'
import { DropDownOptionsBottom } from "../../../../Components/shared/DropDownOptions"
import { DeleteCollection } from "../../../../services/Collections/DeleteCollection"
import { OptionsButton } from "../../../../Components/shared/DropDownOptions/styled/OptionsButton.styled"


interface Props {
    setIsActive: any
}
export const CollectionPreView = (props: Props) => {

    const { SpecificCollection, User } = useContext(GlobalContext)
    const { FetchPosts, Loading, Response } = FetchPostsHandler(0, { CollectionId: SpecificCollection._id }, true)
    const { onClickOnPost } = PreviewThePost()
    const { AddFollowToCollectionHandler, CollectionsFollowLoading } = FollowCollection()
    const { DeleteCollectionHandler } = DeleteCollection()


    useEffect(() => {
        FetchPosts()
    }, [])


    return (
        <Wrapper >

            <DropDownOptionsBottom
                for={"profile"}
                bottom="-40px"
                children={
                    User._id === SpecificCollection.CollectionOwnerId ?
                        <OptionsButton onClick={DeleteCollectionHandler} >Delete</OptionsButton>
                        :
                        null
                }
            />

            {
                User._id === SpecificCollection.CollectionOwnerId ?
                    <RedPenButton />
                    :
                    null
            }

            <CoverImages CoverImg={SpecificCollection.CollectionsCoverPicture !== "" ? SpecificCollection.CollectionsCoverPicture : CoverIMG} UserImg={SpecificCollection.CollectionOwnerImage !== "" ? SpecificCollection.CollectionOwnerImage : UserIMG} />

            {
                SpecificCollection.CollectionOwnerId === User._id ?
                    <UserInfo
                        color={SpecificCollection.Color}
                        forCollectionsPage={true}
                        IsLoading={false}
                        UserName={SpecificCollection.CollectionOwnerName}
                        UserDescription={SpecificCollection.CollectionTitle}
                        UserFollowers={SpecificCollection.CollectionFollowing.length}
                        ProfileButtonClick={() => props.setIsActive(true)}
                        ProfileButtonName={"Edit"}
                    />
                    :
                    <UserInfo
                        color={SpecificCollection.Color}
                        forCollectionsPage={true}
                        IsLoading={CollectionsFollowLoading}
                        UserName={SpecificCollection.CollectionOwnerName}
                        UserDescription={SpecificCollection.CollectionTitle}
                        UserFollowers={SpecificCollection.CollectionFollowing.length}
                        ProfileButtonClick={AddFollowToCollectionHandler}
                        ProfileButtonName={SpecificCollection.CollectionFollowing.includes(User._id) ? "UN FOLLOW" : "FOLLOW"}
                    />
            }


            <Posts
                OnClickOnPost={onClickOnPost}
                Response={Response}
                IsForProfile={true}
                Loading={Loading}
            />

        </Wrapper>
    )
}
