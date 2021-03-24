import { useState, useEffect } from "react";
import styles from "../styles/components/CountDow.module.css";

export function CountDow() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  //padStart -> caso o numero não tenha duas casas completa a primeira(start), com o segundo parametro '0'
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountDow() {
    setActive(true);
  }
  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);
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

      <button
        onClick={startCountDow}
        type="button"
        className={styles.countDowButton}
      >
        Iniciar um ciclo
      </button>
    </>
  );
}
