import { useContext, useEffect } from 'react'
import { Wrapper } from '../../Components/shared/Wrapper'
import { CoverImages } from '../../Components/shared/CoverImages'
import CoverIMG from "../../assets/ICONS/Photos/marguerite-729510__340.jpg"
import UserIMG from "../../assets/ICONS/ProfileImg.jpg"
import { GlobalContext } from '../../Context/GlobalContext'
import { UserInfo } from '../../Components/shared/UserInfo'
import { UserData } from '../../services/LocalStorage/UserData'
import { Posts } from '../../Components/shared/Posts'
import { FetchPostsHandler } from '../../services/PostsServices/FetchPosts'
import { OptionBar } from '../Profile/components/OptionsBar'
import { PreviewThePost } from '../../services/PostsServices/PreviewThePost'
import { RedPenButton } from '../Home/Components/RedPenButton'

export const CollectionPreview = () => {

  const { SpecificCollection } = useContext(GlobalContext)
  const User = UserData()
  const { FetchPosts, Loading, Response } = FetchPostsHandler(1, { CollectionId: SpecificCollection._id })
  const { onClickOnPost } = PreviewThePost()

  useEffect(() => {
    FetchPosts()
  }, [])

  return (
    <Wrapper style={window.innerWidth >= 1024 ? {} : { position: "fixed", top: "0", bottom: '0', overflow: "scroll", zIndex: "20" }}>

      <OptionBar />

      {
        User._id === SpecificCollection.CollectionOwnerId ?
          <RedPenButton />
          :
          null
      }

      <CoverImages CoverImg={SpecificCollection.CollectionsCoverPicture !== "" ? SpecificCollection.CollectionsCoverPicture : CoverIMG} UserImg={SpecificCollection.CollectionOwnerImage !== "" ? SpecificCollection.CollectionOwnerImage : UserIMG} />

      <UserInfo
        color={SpecificCollection.Color}
        forCollectionsPage={true}
        IsLoading={false}
        UserName={SpecificCollection.CollectionOwnerName}
        UserDescription={SpecificCollection.CollectionTitle}
        UserFollowers={SpecificCollection.CollectionFollowing.length}
        ProfileButtonClick={() => ""}
        ProfileButtonName={SpecificCollection.CollectionFollowing.includes(User._id) ? "UN FOLLOW" : "FOLLOW"}
      />

      <Posts
        OnClickOnPost={onClickOnPost}
        Response={Response}
        IsForProfile={true}
        Loading={Loading}
      />

    </Wrapper>
  )
}
