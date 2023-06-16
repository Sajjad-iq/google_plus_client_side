import { createContext, ReactNode, useState } from 'react'

type ProviderChildrenType = {
    children: ReactNode
}

export const CommentsContext = createContext<any>([])

const CommentsContextProvider = ({ children }: ProviderChildrenType) => {

    const [ReplayTo, setReplayTo] = useState("")
    const [ReplayToId, setReplayToId] = useState("")


    const data = {
        ReplayTo, setReplayTo, ReplayToId, setReplayToId
    }

    return (
        <CommentsContext.Provider value={data}>
            {children}
        </CommentsContext.Provider>
    )
}

export default CommentsContextProvider