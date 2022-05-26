import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Stop</title>
        <meta name='description' content='Tasty Pizza' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Homepage
    </div>
  );
}
