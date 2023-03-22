import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import { AddPost } from "./AddPost";
import { useAtom } from "jotai";
import { tokenAtom } from "../../atoms/authAtoms";
import { getPosts, getPostsWithAuth } from "../../services/post";
import { postsAtom, PostType } from "../../atoms/postAtoms";
import { LoaderComponent } from "../Loader/LoaderComponent";

export default function Posts() {

    
    const [token] = useAtom(tokenAtom)
    const [posts, setPosts] = useAtom(postsAtom)

    useEffect(() => {
        (async () => {
            try {
                if (token) {
                    const authPosts = await getPostsWithAuth(token)
                    setPosts(authPosts.data)

                } else {
                    const allPosts = await getPosts()
                    setPosts(allPosts.data)
                }
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])


    

    if (posts) {
        return (
            <div style={{ width: "100%" }}>
                {token && <AddPost/>}
                {/* <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} /> */}
                {posts.map((post: PostType) => (
                        <PostCard key={post._id} post={post} />
                ))}
            </div>
        )
    } else {
        return <div style={{ width: "100%", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LoaderComponent />
        </div>
    }
}