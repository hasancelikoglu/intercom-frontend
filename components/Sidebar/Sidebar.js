import ProfileCard from '../ProfileCard/ProfileCard'
import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <div className={styles.Sidebar}>
            <ProfileCard/>
        </div>
    )
}