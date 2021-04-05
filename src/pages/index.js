import Head from 'next/head'
import LandPrices from '../components/LandPrices'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Payment</title>
      </Head>
        <LandPrices/> 
    </div>
  )
}
