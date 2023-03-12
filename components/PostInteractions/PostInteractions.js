import { IoChatboxEllipsesOutline, IoHeartOutline } from 'react-icons/io5'
import styles from './PostInteractions.module.css'

export default function PostInteractions() {
    return (
        <div className={styles.actions}>
            <div className={`${styles.likeButton} ${styles.button}`}>
                <IoHeartOutline className={styles.icon} size={23} />
                <span>32</span>
            </div>

            <div className={`${styles.commentButton} ${styles.button}`}>
                <IoChatboxEllipsesOutline className={styles.icon} size={23} />
                <span>17</span>
            </div>
        </div>
    )
}