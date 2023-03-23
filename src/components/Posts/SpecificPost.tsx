import { Text } from "@mantine/core"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { useParams } from "react-router-dom"
import { PostType } from "../../atoms/postAtoms"
import { NotFound } from "../../pages/404"
import { getSpecificPost } from "../../services/post"
import { AddComment } from "../Comments/AddComment"
import Comments from "../Comments/Comments"
import { PostCard } from "./PostCard"

export default function SpecificPost() {
    const [post, setPost] = useState<PostType>()
    const [notFoundText, setNotFoundText] = useState("")
    const { pid } = useParams()
    useEffect(() => {
        if (pid) {
            (async () => {
                try {
                    const response = await getSpecificPost(pid)
                    setPost(response.data)
                } catch (error: any) {
                    setNotFoundText(error.response.data.message)
                }
            })()
        }
    }, [])
    return (
        <div style={{width: "100%"}}>
            {post ? (
                <div>
                    <PostCard specific={true} post={post} />
                    <Text m={20} size={30}>Comments</Text>
                    <AddComment/>
                    {post.comments.length > 0 && (
                        <div>
                            
                            
                            <Comments comments={post.comments} />
                        </div>
                    )}
                </div>
            ) : (<h1>{notFoundText}</h1>)}
        </div>
    )
}