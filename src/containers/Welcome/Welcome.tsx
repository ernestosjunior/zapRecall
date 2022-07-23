import React, { Dispatch, SetStateAction } from "react";
import logoVertical from "../../assets/logo_vertical.svg";
import styles from "./Welcome.module.css";

interface WelcomeProps {
  setInit: Dispatch<SetStateAction<boolean>>;
}

const Welcome: React.FC<WelcomeProps> = ({ setInit = () => null }) => {
  return (
    <>
      {" "}
      <img src={logoVertical} />
      <button className={styles.startButton} onClick={() => setInit(false)}>
        Iniciar Recall!
      </button>
    </>
  );
};

export default Welcome;
