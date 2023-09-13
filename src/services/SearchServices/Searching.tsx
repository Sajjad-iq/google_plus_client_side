import axios from 'axios'
import { ChangeEvent } from 'react'



export const Searching = (SearchWord: any, setSearchWord: any, setIsValid: any, setResponse: any) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const Regex = /[^a-zA-Z1-9 \s]/g
        const Valid = Regex.test(e.target.value)

        if (!Valid) {
            setSearchWord(e.target.value)
            setIsValid(true)
        } else setIsValid(false)
    }


    const FindUserHandler = async () => {
        try {
            await axios({
                method: 'post',
                url: import.meta.env.VITE_BACKEND_URL + "/api/Search/Searching",
                headers: {},
                withCredentials: true,
                data: {
                    SearchWord: SearchWord
                }
            }
            ).then(res => {
                setResponse(res.data)
            })
        } catch (e) {
            console.log(e)
        }
    }
    return { onChange, FindUserHandler }
}
