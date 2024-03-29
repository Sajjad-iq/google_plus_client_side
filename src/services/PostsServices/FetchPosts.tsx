import axios from "axios"
import { useContext, useState } from "react"
import { GlobalContext, def } from "../../Context/GlobalContext"


export const FetchPostsHandler = (PostsCount: number, Owner: any, forCollectionsPreviewWindow: boolean = false) => {

    const [Loading, setLoading] = useState(false)
    const [Response, setResponse] = useState([def])
    const [StopFetching, setStopFetching] = useState(false)
    const { User, setOptionsValue } = useContext(GlobalContext)

    const FetchPosts = async () => {
        try {
            setLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/Get",
                headers: {

                },
                withCredentials: true,
                data: {
                    PostsOwner: Owner,
                    PayloadCount: PostsCount,
                    FollowingCollections: User.FollowingCollections,
                    forCollectionsPreviewWindow: forCollectionsPreviewWindow,
                    BlackList: User.BlockedAccounts,
                    BlockedFrom: User.BlockedFromAccounts
                }
            }
            ).then(async (e: any) => {
                var oldData = [...Response]
                let newPosts = oldData.concat(e.data.ResponsePosts)
                setResponse(newPosts)
                setStopFetching(e.data.StopFetching)
            })
        }

        catch (e: any) {
            window.alert("something went wrong")
        }

        finally {
            setLoading(false)
            setOptionsValue("Public")
        }
    }

    return { FetchPosts, StopFetching, Loading, setLoading, Response }
}
