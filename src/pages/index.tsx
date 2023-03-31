import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Animated Webp Image bug</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>External Animated WEBP</h1>
        <p>https://mathiasbynens.be/demo/animated-webp-supported.webp</p>
        <Image
          src="https://mathiasbynens.be/demo/animated-webp-supported.webp"
          width={400}
          height={400}
          alt="external animated webp"
        ></Image>
        <h1>Laetro External Animated WEBP</h1>
        <p>
          https://laetro-production.s3.amazonaws.com/store/ff5e35a8976d45d9ddb64609195f684f.webp
        </p>
        <Image
          src="https://laetro-production.s3.amazonaws.com/store/ff5e35a8976d45d9ddb64609195f684f.webp"
          width={400}
          height={400}
          alt="animated webp"
        ></Image>
      </main>
    </>
  );
}
