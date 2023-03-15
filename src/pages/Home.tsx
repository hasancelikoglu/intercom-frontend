import NavbarNested from '../components/Navbar/NavbarNested'
import Posts from '../components/Posts/Posts'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div style={{display: "flex"}}>
            <NavbarNested/>
            <div className={styles.main}>
                <Posts/>
            </div>
        </div>
    )
}