import { atom } from "jotai";

export interface AuthorType {
    _id: string;
    email: string;
    name: string;
    profil_photo_url: string;
    username: string;
}

export interface CommentType {
    _id: string;
    author: AuthorType;
    content: string;
    createdDate: string;
    post: string;
    __v: 0;
}

export interface PostType {
    _id: string;
    author: AuthorType;
    title: string;
    content: string;
    photo_url: string | null;
    likes: number;
    isLiked: boolean;
    comments: CommentType[];
    createdDate: string;
    updatedDate: string;
    __v: number;
}

type postAtom = null | PostType[]
export const postsAtom = atom<postAtom>(null)