import axios from 'axios'
import { ChangeEvent, useState } from 'react'



export const Searching = (SearchWord: any, setSearchWord: any, setIsValid: any, setResponse: any, setIsLoading: any) => {


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
            setIsLoading(true)
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
        finally {
            setIsLoading(false)
        }
    }
    return { onChange, FindUserHandler }
}
