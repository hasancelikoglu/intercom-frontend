import { atom } from "jotai";

export interface AuthorType {
    _id: string;
    email: string;
    name: string;
    username: string;
    profil_photo_url: string;
}

export interface CommentType {
    _id: string;
    author: AuthorType;
    content: string;
    createdDate: string;
    post: string;
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
}

type postAtom = null | PostType[]
export const postsAtom = atom<postAtom>(null)