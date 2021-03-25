import "../styles/global.css";
import {
  ChallengesContext,
  ChallengesProvider,
} from "../contexts/challengesContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
