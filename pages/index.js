import styles from '@/styles/Home.module.css'
import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import AllPosts from '@/components/AllPosts/AllPosts'
import Topics from '@/components/Topics/Topics'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
      <Header />
      <div className={styles.home}>
        <Sidebar />
        <AllPosts />
        <Topics />
      </div>
    </>
  )
}
