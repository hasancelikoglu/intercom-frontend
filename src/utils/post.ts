import { getDefaultStore } from "jotai"
import { tokenAtom } from "../atoms/authAtoms"
import { postsAtom } from "../atoms/postAtoms"
import { getPosts, getPostsWithAuth } from "../services/post"

const defaultStore = getDefaultStore()

export const generateDate = (date: string) => {
    const newDate = new Date(date)
    const dmy = newDate.toLocaleDateString('tr', { weekday: "long", month: "short", day: "numeric" })
    const time = newDate.toLocaleTimeString('tr', { hour: "2-digit", minute: "2-digit" })

    return dmy + " " + time
}

export const getPostsHandle = async () => {
    const token = defaultStore.get(tokenAtom)
    console.log(token)
    if (token) {
        const authPosts = await getPostsWithAuth(token)
        defaultStore.set(postsAtom, authPosts.data)
        console.log("auth posts")

    } else if(!token) {
        const allPosts = await getPosts()
        defaultStore.set(postsAtom, allPosts.data)
        console.log("all posts")
    }
}