import { getDefaultStore } from "jotai";
import { tokenAtom, userAtom } from "../atoms/authAtoms";

const defaultStore = getDefaultStore()

export const setUser = (user: any) => {
    defaultStore.set(userAtom, ({
        email: user.email,
        name: user.name,
        avatar: "",
        username: "user" + user.username,
        followers: user.followers.length,
        following: user.following.length,
        posts: user.posts.length
    }))
}

export const setToken = (token: string) => {
    defaultStore.set(tokenAtom, token)
}