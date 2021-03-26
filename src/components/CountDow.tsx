import { useContext } from "react";
import { CountdownContex } from "../contexts/countDowContext";
import styles from "../styles/components/CountDow.module.css";

export function CountDow() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountDow,
    startCountDow,
  } = useContext(CountdownContex);

  //padStart -> caso o numero não tenha duas casas completa a primeira(start), com o segundo parametro '0'
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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
