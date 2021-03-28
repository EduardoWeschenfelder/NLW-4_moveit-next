import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./challengesContext";

interface CountDownContexData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDow: () => void;
  resetCountDow: () => void;
}

interface CountDownProviderProps {
  children: ReactNode;
}

export const CountdownContex = createContext({} as CountDownContexData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountDownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDow() {
    setIsActive(true);
  }
  function resetCountDow() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
    setHasFinished(false);
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
    <CountdownContex.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDow,
        resetCountDow,
      }}
    >
      {children}
    </CountdownContex.Provider>
  );
}
