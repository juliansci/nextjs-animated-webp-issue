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
        <h1>Static Webp</h1>
        <Image
          src="/images/static.webp"
          width={500}
          height={331}
          alt="static webp"
        ></Image>
        <h1>Animated GIF</h1>
        <Image
          src="/images/animated.gif"
          width={750}
          height={600}
          alt="animated gif"
        ></Image>
        <h1>Local Animated WEBP</h1>
        <Image
          src="/images/animated.webp"
          width={400}
          height={400}
          alt="animated webp"
        ></Image>
        <h1>External Animated WEBP</h1>
        <Image
          src="https://mathiasbynens.be/demo/animated-webp-supported.webp"
          width={400}
          height={400}
          alt="external animated webp"
        ></Image>
      </main>
    </>
  );
}
