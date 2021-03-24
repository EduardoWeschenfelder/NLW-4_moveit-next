import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDow } from "../components/CountDow";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";

import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <Head>
        <title>Início | move.it</title>
      </Head>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDow />
        </div>
        <div></div>
      </section>
    </div>
  );
}