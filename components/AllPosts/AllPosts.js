import NewPost from '../NewPost/NewPost'
import Post from '../Post/Post'
import styles from './AllPosts.module.css'

export default function AllPosts() {
    return (
        <div className={styles.AllPosts}>
            <NewPost/>
            <Post content="lorem ipsum dolar sit amet consectur die monat amk yarak taşak ipsum dolar site ameta ceonteatea yarmeye kotomete anametayaranıye"/>

            <Post content="lorem ipsum dolar sit amet consectur die monat amk yarak taşak ipsum dolar site ameta ceonteatea yarmeye kotomete anametayaranıye ipsum dolar site ameta ceonteatea yarmeye kotomete anametayaranıye ipsum dolar site ameta ceonteatea yarmeye kotomete anametayaranıye yaranıye ipsum dolar site ameta ceonteatea yarmeye kotomete anametayaranıye yaranıye ipsum dolar site ameta ceonteatea yarmeye kotomete anametayaranıye" />
        </div>
    )
}