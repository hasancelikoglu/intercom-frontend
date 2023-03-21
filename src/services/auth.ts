import axios from 'axios'
const HTTP = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const register = async (data: Object) => {
    const promise = await HTTP.post("/auth/register", data)
    return promise
}

export const login = async (data: Object) => {
    const promise = await HTTP.post("/auth/login", data)
    return promise
}