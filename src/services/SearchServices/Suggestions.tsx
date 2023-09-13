import axios from 'axios'

export const Suggestions = (setResponse: any) => {

    const FetchSuggestions = async () => {
        try {
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
        }
    }
    return { FetchSuggestions }
}
