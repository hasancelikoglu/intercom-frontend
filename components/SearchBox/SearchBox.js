import styles from './SearchBox.module.css'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
    return (
        <div className={styles.searchBox}>
            <IoSearch className={styles.icon} color='white' size={20} />
            <input className={styles.searchInput} type="text" placeholder='Search something..' />
        </div>
    )
}