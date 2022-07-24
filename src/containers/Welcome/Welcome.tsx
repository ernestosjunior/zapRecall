import React, { Dispatch, SetStateAction } from "react";
import logoVertical from "../../assets/logo_vertical.svg";
import styles from "./Welcome.module.css";

interface WelcomeProps {
  setInit: Dispatch<SetStateAction<boolean>>;
  onChange: Dispatch<SetStateAction<any>>;
  goal: string;
}

const Welcome: React.FC<WelcomeProps> = ({
  setInit = () => null,
  onChange,
  goal,
}) => {
  return (
    <>
      {" "}
      <img src={logoVertical} />
      <input
        className={styles.goalsInput}
        placeholder="Digite sua meta de zaps..."
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className={styles.startButton}
        onClick={() => setInit(false)}
        disabled={!goal}
      >
        Iniciar Recall!
      </button>
    </>
  );
};

export default Welcome;
