import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/challengesContext";
import styles from "../styles/components/CountDow.module.css";

let countdownTimeout: NodeJS.Timeout;

export function CountDow() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  //padStart -> caso o numero não tenha duas casas completa a primeira(start), com o segundo parametro '0'
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountDow() {
    setIsActive(true);
  }
  function resetCountDow() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return (
    <>
      <div className={styles.countDowContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countDowButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountDow}
              type="button"
              className={`${styles.countDowButton} ${styles.countDowButtonActive}`}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              onClick={startCountDow}
              type="button"
              className={styles.countDowButton}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </>
  );
}
