import styles from "./Header.module.css"
import Link from "next/link"
import SearchBox from "../SearchBox/SearchBox"

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link href="/" className={styles.headerText}>SOCIAL MEDIA APP</Link>
                <SearchBox/>
            </nav>
        </header>
    )
}