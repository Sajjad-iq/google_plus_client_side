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
}
export const NotificationDef = {
    NotificationName: "",
    NotificationBody: "",
    NotificationFromId: "",
    NotificationFrom: "",
    NotificationOwnerImage: "",
}



type ProviderChildrenType = {
    children: ReactNode
}

export const GlobalContext = createContext<any>([])

const GlobalContextProvider = ({ children }: ProviderChildrenType) => {

    // my user 
    const [User, setUser] = useState(FindUserDef)
    // for error page
    const [ErrMessage, setErrMessage] = useState("NetWork Error")
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

    // for notifications bell
    const [HasNotifications, setHasNotifications] = useState(false)

    return (
        <GlobalContext.Provider value={{ User, setUser, HasNotifications, setHasNotifications, SpecificPostComments, setSpecificPostComments, IsEditPostWindowActive, setIsEditPostWindowActive, PeopleUser, setPeopleUser, FindUser, setFindUser, SpecificPost, setSpecificPost, ErrMessage, setErrMessage }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider