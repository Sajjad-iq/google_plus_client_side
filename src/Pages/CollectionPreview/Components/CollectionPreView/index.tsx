import { useContext, useState, useEffect } from "react"
import { CoverImages } from "../../../../Components/shared/CoverImages"
import { Posts } from "../../../../Components/shared/Posts"
import { UserInfo } from "../../../../Components/shared/UserInfo"
import { GlobalContext } from "../../../../Context/GlobalContext"
import { FollowCollection } from "../../../../services/Collections/FollowCollection"
import { UserData } from "../../../../services/LocalStorage/UserData"
import { FetchPostsHandler } from "../../../../services/PostsServices/FetchPosts"
import { PreviewThePost } from "../../../../services/PostsServices/PreviewThePost"
import { RedPenButton } from "../../../Home/Components/RedPenButton"
import { Wrapper } from "../../../Home/styled/Wrapper"
import UserIMG from '../../../../assets/ICONS/ProfileImg.jpg'
import CoverIMG from '../../../../assets/ICONS/Photos/marguerite-729510__340.jpg'
import { BorderButton } from "../../../../Components/common/BorderButton.styled"
import { DropDownOptionsBottom } from "../../../../Components/shared/DropDownOptions"
import { DeleteCollection } from "../../../../services/Collections/DeleteCollection"


interface Props {
    setIsActive: any
}
export const CollectionPreView = (props: Props) => {

    const { SpecificCollection, setSpecificCollection } = useContext(GlobalContext)
    const User = UserData()
    const { FetchPosts, Loading, Response } = FetchPostsHandler(0, { CollectionId: SpecificCollection._id })
    const { onClickOnPost } = PreviewThePost()
    const AddFollowToCollectionHandler = FollowCollection()
    const [IsFollow, setIsFollow] = useState("")
    const { DeleteCollectionHandler } = DeleteCollection()


    useEffect(() => {
        FetchPosts()
    }, [])

    useEffect(() => {
        SpecificCollection.CollectionFollowing.includes(User._id) ? setIsFollow("UN FOLLOW") : setIsFollow("FOLLOW")
    }, [SpecificCollection, AddFollowToCollectionHandler, setSpecificCollection])

    return (
        <Wrapper >

            <DropDownOptionsBottom
                bottom="-40px"
                children={
                    <BorderButton onClick={DeleteCollectionHandler} >Delete</BorderButton>
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
                        IsLoading={false}
                        UserName={SpecificCollection.CollectionOwnerName}
                        UserDescription={SpecificCollection.CollectionTitle}
                        UserFollowers={SpecificCollection.CollectionFollowing.length}
                        ProfileButtonClick={AddFollowToCollectionHandler}
                        ProfileButtonName={IsFollow}
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