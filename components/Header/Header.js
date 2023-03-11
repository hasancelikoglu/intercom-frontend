import styles from '@/styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/profile">
                    Profile
                </Link>
            </nav>
        </header>
    )
}