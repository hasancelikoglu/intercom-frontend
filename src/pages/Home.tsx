import NavbarNested from '../components/Navbar/NavbarNested'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div style={{display: "flex"}}>
            <NavbarNested/>
            <div className={styles.main}>

            </div>
        </div>
    )
}