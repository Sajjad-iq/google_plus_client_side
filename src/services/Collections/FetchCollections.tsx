import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CollectionsDef, GlobalContext } from "../../Context/GlobalContext"


export const FetchCollections = (Owner: any, SelectedButton: number) => {

    const [CollectionsLoading, setCollectionsLoading] = useState(false)
    const [CollectionsResponse, setResponse] = useState([CollectionsDef])
    const [StopFetchingCollections, setStopFetchingCollections] = useState(false)
    const Navigate = useNavigate()
    const { setErrMessage } = useContext(GlobalContext)

    const FetchCollectionsHandler = async () => {
        try {
            setCollectionsLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Collections/",
                headers: {

                },
                withCredentials: true,
                data: {
                    CollectionsOwner: SelectedButton >= 2 ? Owner : {},
                    PayloadCount: 30
                }
            }
            ).then(async (e: any) => {
                if (SelectedButton < 2) {
                    setResponse(e.data)
                } else {
                    setResponse([CollectionsDef])
                    setResponse(e.data)
                }
                setStopFetchingCollections(false)

            })
        }

        catch (e: any) {
            setErrMessage(e.message)
            Navigate("/Error")
        }

        finally {
            setCollectionsLoading(false)
        }
    }

    return { FetchCollectionsHandler, StopFetchingCollections, CollectionsLoading, setCollectionsLoading, CollectionsResponse, setResponse }
}
