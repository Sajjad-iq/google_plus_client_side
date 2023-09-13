import axios from 'axios'

export const Suggestions = (setResponse: any, setIsLoading: any) => {

    const FetchSuggestions = async () => {
        try {

            setIsLoading(true)
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Search/",
                headers: {},
                withCredentials: true,
                data: {
                }
            }
            ).then(res => {
                setResponse(res.data)
            })
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)

        }
    }
    return { FetchSuggestions }
}
