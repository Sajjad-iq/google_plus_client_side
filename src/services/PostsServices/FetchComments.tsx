import axios from 'axios'
import { Dispatch, SetStateAction, useContext, useState } from 'react'
import { CommentsDef, GlobalContext } from '../../Context/GlobalContext'

export const FetchComments = (PostsCount: number, setComments: Dispatch<SetStateAction<any>>, Comments: Array<any>) => {

    const [Loading, setLoading] = useState(false)
    const [StopFetching, setStopFetching] = useState(false)
    const { SpecificPost, User } = useContext(GlobalContext)

    const FetchCommentsHandler = async () => {
        try {
            setLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Posts/GetComments",
                headers: {},
                withCredentials: true,
                data: {
                    PostId: SpecificPost._id,
                    PayloadCount: PostsCount,
                    BlackList: User.BlockedAccounts,
                    BlockedFrom: User.BlockedFromAccounts
                }
            }
            ).then(async (e: any) => {
                var oldData = [...Comments]
                let newComments = oldData.concat(e.data.ResponseComments)
                setComments(newComments)
                setStopFetching(e.data.StopFetching)
            })

        } catch (e: any) {
            console.log(e)
            window.alert("something went wrong")
        }
        finally {
            setLoading(false)
        }
    }
    return { FetchCommentsHandler, StopFetching, Loading }
}
