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

export const changePassword = async (token: string, data: string) => {
    HTTP.defaults.headers.common['Authorization'] = "Bearer " + token
    const promise = await HTTP.post("/auth/change-password", { password: data })
    return promise
}