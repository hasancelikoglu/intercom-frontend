import {atom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'
import { PostType } from './postAtoms';

// {image: "", avatar: "", name: "Hasan Çelikoğlu", username: "@hasancelikoglu0", stats: [{label: "Followers", value: "32"}, {label: "Following", value: "17"}, {label: "Posts", value: "43"}]}



export interface User {
    _id: string;
    name: string;
    username: string;
    email: string;
    profil_photo_url: string;
    banner_url: string;
    following: string[];
    followers: string[];
    followingCount: number;
    followersCount: number;
    posts: PostType[];
    postsCount: number;
    likedPosts: string[];
    createdDate: string;
    updatedDate: string;
    __v: number;
}

type UserAtom = null | User;

export const strengthAtom = atom(0)
export const userAtom = atom<UserAtom>(null);
export const tokenAtom = atom(localStorage.getItem("token"))