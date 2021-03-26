import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDow } from "../components/CountDow";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";

import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/countDowContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <Head>
        <title>Início | move.it</title>
      </Head>
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDow />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
