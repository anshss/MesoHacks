import styles from "../styles/Createpost.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Post</title>
        <meta name="description" content="Create a post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is cerate post</h1>
    </div>
  );
}
