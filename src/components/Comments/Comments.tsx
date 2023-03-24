import { CommentCard } from "./CommentCard";

export default function Comments({comments}: any) {
    return (
        <div style={{display: "flex", flexDirection: "column-reverse"}}>
            {comments.map((comment: any) => (
                <CommentCard key={comment._id} comment={comment} />
            ))}
        </div>
    )
}