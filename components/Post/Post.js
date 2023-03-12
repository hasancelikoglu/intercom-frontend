import Image from 'next/image'
import styles from './Post.module.css'

export default function Post({ content }) {
    return (
        <div className={styles.Post}>

            <Image className={styles.authorImage} src="/profile.webp" width={50} height={50} />

            <div className={styles.main}>
                <div className={styles.infos}>
                    <div className={styles.authorInfos}>
                        <p className={styles.authorFullname}>John Doe</p>
                        <p className={styles.authorUsername}>@johndoe12</p>
                    </div>
                    <p className={styles.created}>Few minutes ago</p>
                </div>
                <p className={styles.content}>{content}</p>
                <div className={styles.actions}>
                    <button>like</button>
                    <button>comment</button>
                </div>
            </div>


            <div className={styles.threeDot}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </div>
    )
}