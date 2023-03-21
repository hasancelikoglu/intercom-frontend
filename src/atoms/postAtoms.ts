import { atom } from "jotai";

interface PostType {
    _id: string;
    title: string;
    content: string;
    author: string;
    photo_url: null;
    likes: number;
    isLiked?: boolean;
    comment: [];
    createadDate: string;
}

type postAtom = boolean | PostType[]
export const postsAtom = atom<postAtom>(false)