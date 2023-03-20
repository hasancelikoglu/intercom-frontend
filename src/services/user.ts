import axios from 'axios'
const HTTP = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const getUser = async(token: string) => {
    HTTP.defaults.headers.common['Authorization'] = "Bearer " + token
    const promise = await HTTP.get("/users/profile")
    return promise
}