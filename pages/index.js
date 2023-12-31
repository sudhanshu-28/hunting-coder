import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.title}>
        <h1>Hunting Coder</h1>
      </div>

      <div className={styles.subtitle}>
        A blog for hunting coders by hunting coder
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/home-img.jpg"
          width={800}
          height={400}
          className={styles.myHomeImage}
        />
      </div>
    </>
  );
}
