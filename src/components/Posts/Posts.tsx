import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import { AddPost } from "./AddPost";
import { useAtom } from "jotai";
import { tokenAtom, userAtom } from "../../atoms/authAtoms";
import { postsAtom, PostType } from "../../atoms/postAtoms";
import { LoaderComponent } from "../Loader/LoaderComponent";
import { getPostsHandle } from "../../utils/post";

export default function Posts() {


    const [token] = useAtom(tokenAtom)
    const [posts, setPosts] = useAtom(postsAtom)
    const [user] = useAtom(userAtom)

    useEffect(() => {
        setPosts(null)
        try {
            getPostsHandle()
        } catch (error: any) {
            console.log(error)
        }
    }, [user])

    if (posts) {
        return (
            <div style={{ width: "100%" }}>
                {token && <AddPost />}

                <div style={{display: "flex", flexDirection: "column-reverse"}}>
                    {posts.map((post: PostType) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
            </div>
        )
    } else {
        return <div style={{ width: "100%", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LoaderComponent />
        </div>
    }
}