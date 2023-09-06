import { createContext, ReactNode, useState } from 'react'

export const def = {
    _id: "",
    PostBody: "",
    PostOwnerName: "",
    PostOwnerId: "",
    PostImage: "",
    Link: "",
    CommentsCounter: 0,
    Likes: ["22", "33"],
    Comments: [],
}

export const CollectionsDef = {
    _id: "",
    CollectionTitle: "",
    Tagline: "",
    CollectionsCoverPicture: "",
    CollectionFollowing: [],
    CollectionOwnerId: '',
    CollectionOwnerName: '',
    CollectionOwnerImage: "",
    Color: "#808080"
}

export const FindUserDef = {
    _id: "",
    UserName: "",
    FamilyName: "",
    ProfilePicture: "",
    CoverPicture: "",
    Description: "",
    Email: "",
    Password: "",
    Followers: [],
    FollowingCollections: [],
    BlockedAccounts: []
}
export const NotificationDef = {
    NotificationName: [""],
    NotificationBody: "",
    NotificationUsersIncludedIds: [""],
    NotificationUsersIncludedImages: [""],
    Read: false
}

export const CommentsDef = {
    CommentBody: "",
    CommentOwnerName: ``,
    CommentOwnerId: "",
    CommentImage: "",
    CommentOwnerImage: "",
    CommentsRePlayTo: "",
    createdAt: ""
}


type ProviderChildrenType = {
    children: ReactNode
}

export const GlobalContext = createContext<any>([])

const GlobalContextProvider = ({ children }: ProviderChildrenType) => {

    // my user 
    const [User, setUser] = useState(FindUserDef)
    //for find people from comments or posts when user click on the small image
    const [FindUser, setFindUser] = useState(FindUserDef)
    // for find people from people page
    const [PeopleUser, setPeopleUser] = useState(FindUserDef)
    // to set post edit window active
    const [IsEditPostWindowActive, setIsEditPostWindowActive] = useState(false)

    // when user want to preview specific post
    const [SpecificPost, setSpecificPost] = useState(def)
    // for comments of the specific post
    const [SpecificPostComments, setSpecificPostComments] = useState([])

    // for find SpecificCollection for Collections page
    const [SpecificCollection, setSpecificCollection] = useState(CollectionsDef)

    // for add post options
    const [OptionsValue, setOptionsValue] = useState("Public")

    // for notifications bell
    const [HasNotifications, setHasNotifications] = useState(false)

    // for collections page
    const [SelectedButton, setSelectedButton] = useState(0)

    return (
        <GlobalContext.Provider value={{ OptionsValue, setOptionsValue, SpecificCollection, setSpecificCollection, User, setUser, HasNotifications, setHasNotifications, SpecificPostComments, setSpecificPostComments, IsEditPostWindowActive, setIsEditPostWindowActive, PeopleUser, setPeopleUser, FindUser, setFindUser, SpecificPost, setSpecificPost, SelectedButton, setSelectedButton }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider