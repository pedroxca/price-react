import Head from 'next/head'
import CardPrice from '../components/CardPrice'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardPrice productDescription={['aadsfasdfasdfasdf', 'aasdfadsfasdfads', 'aadsfadsfadsfas']} packageTitle='nani' packagePrice={20}/>
      <h1>yay</h1>
    </div>
  )
}
