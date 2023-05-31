import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext, def } from "../../Context/GlobalContext"


export const FetchPostsHandler = (PostsCount: number, Owner: any, forCollectionsPreviewWindow: boolean = false) => {

    const [Loading, setLoading] = useState(false)
    const [Response, setResponse] = useState([def])
    const [StopFetching, setStopFetching] = useState(false)
    const Navigate = useNavigate()
    const { setErrMessage, setOptionsValue } = useContext(GlobalContext)
    const { User } = useContext(GlobalContext)
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
                    forCollectionsPreviewWindow: forCollectionsPreviewWindow
                }
            }
            ).then(async (e: any) => {
                let newPosts = Response.concat(e.data.ResponsePosts)
                setResponse(newPosts)
                setStopFetching(e.data.StopFetching)
            })
        }

        catch (e: any) {
            setErrMessage(e.message)
            Navigate("/Error")
        }

        finally {
            setLoading(false)
            setOptionsValue("Public")
        }
    }

    return { FetchPosts, StopFetching, Loading, setLoading, Response }
}
