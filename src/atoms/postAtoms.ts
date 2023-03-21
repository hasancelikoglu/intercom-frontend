import { atom } from "jotai";

export interface PostType {
    _id: string;
    title: string;
    content: string;
    author: string;
    photo_url: string | null;
    likes: number;
    isLiked: boolean;
    comments: string[];
    createdDate: string;
    updatedDate: string;
    __v: number;
}

type postAtom = null | PostType[]
export const postsAtom = atom<postAtom>(null)