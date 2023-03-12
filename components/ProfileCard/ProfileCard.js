import Image from 'next/image'
import Link from 'next/link'
import styles from './ProfileCard.module.css'

export default function ProfileCard() {

    console.log(styles)

    return (
        <div className={styles.ProfileCard}>

            <div className={styles.primaryInfos}>
                <Image className={styles.profileImage} priority src="/profile.webp" width={100} height={100} alt="profile-image" />
                <div className={styles.fullnameAndUsername}>
                    <p className={styles.fullname}>John Doe</p>
                    <p className={styles.username}>@johndoe12</p>
                </div>
            </div>


            <div className={styles.otherInfos}>
                <div className={styles.followers}>
                    <p className={styles.count}>32</p>
                    <p className={styles.text}>followers</p>
                </div>

                <div className={styles.following}>
                    <p className={styles.count}>43</p>
                    <p className={styles.text}>followers</p>
                </div>
            </div>


            <Link className={styles.viewProfile} href="/" >View profile</Link>

        </div>
    )
}