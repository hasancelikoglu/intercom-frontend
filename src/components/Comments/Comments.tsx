import { CommentCard } from "./CommentCard";

export default function Comments({comments}: any) {
    return (
        <div>
            {comments.map((comment: any) => (
                <CommentCard key={comment._id} comment={comment} />
            ))}
        </div>
    )
}