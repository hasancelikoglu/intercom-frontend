import {atom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'

// {image: "", avatar: "", name: "Hasan Çelikoğlu", username: "@hasancelikoglu0", stats: [{label: "Followers", value: "32"}, {label: "Following", value: "17"}, {label: "Posts", value: "43"}]}



interface User {
    name: string;
    email: string;
    avatar: string;
    username: string;
    user: boolean;
    followers: number;
    following: number;
    posts: number;
}

export const strengthAtom = atom(0)
export const userAtom = atom<Partial<User>>({user: false})
export const tokenAtom = atom(localStorage.getItem("token"))