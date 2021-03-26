import { useContext } from "react";
import { ChallengesContext } from "../contexts/challengesContext";
import { CountdownContex } from "../contexts/countDowContext";
import styles from "../styles/components/ChallengeBox.module.css";
export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountDow } = useContext(CountdownContex);

  function handleChallengeSecceed() {
    completedChallenge();
    resetCountDow();
  }
  function handleChallengeFailed() {
    resetChallenge();
    resetCountDow();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            {/* {activeChallenge.type === "body" ? (
              <img src="icons/body.svg" alt="" />
            ) : (
              <img src="icons/eye.svg" alt="" />
            )} */}
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceedButton}
              onClick={handleChallengeSecceed}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
