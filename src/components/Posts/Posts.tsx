import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import { AddPost } from "./AddPost";
import { useAtom } from "jotai";
import { tokenAtom } from "../../atoms/authAtoms";
import { getPosts, getPostsWithAuth } from "../../services/post";
import { postsAtom } from "../../atoms/postAtoms";
import { LoaderComponent } from "../Loader/LoaderComponent";

export default function Posts() {

    
    const [token] = useAtom(tokenAtom)
    const [posts, setPosts] = useAtom(postsAtom)

    useEffect(() => {
        (async () => {
            try {
                if (token) {
                    const authPosts = await getPostsWithAuth(token)
                    console.log("Auth ile gelen postlar", authPosts.data)
                    setPosts(authPosts.data)

                } else {
                    const allPosts = await getPosts()
                    console.log("Tüm postlar", allPosts.data)
                    setPosts(allPosts.data)
                }
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    console.log()

    

    if (posts) {
        return (
            <div style={{ width: "100%" }}>
                <AddPost />
                {/* <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} /> */}
                {posts.map((post: Object) => (
                    // <pre>{JSON.stringify(post, null, 2)}</pre>
                    <>
                        <PostCard post={post} />
                    </>
                ))}
            </div>
        )
    } else {
        return <div style={{ width: "100%", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LoaderComponent />
        </div>
    }
}