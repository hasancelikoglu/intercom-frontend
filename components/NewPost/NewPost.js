import Image from 'next/image'
import styles from './NewPost.module.css'

export default function NewPost() {
    return (
        <div className={styles.NewPost}>
            <Image src="/profile.webp" className={styles.authorImage} width={50} height={50} alt='profile-image'  />
            <span className={styles.content} role="textbox" contentEditable></span>
        </div>
    )
}