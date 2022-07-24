import React, { Dispatch, SetStateAction } from "react";
import styles from "./StatusBar.module.css";
import checkIcon from ".././../assets/check.svg";
import uncheckIcon from ".././../assets/uncheck.svg";
import questionIcon from "../../assets/question.svg";

interface StatusBarProps {
  total: number;
  completed: number;
  icons: string[];
  setInit: Dispatch<SetStateAction<boolean>>;
  handleRestart: () => void;
}

const StatusBar: React.FC<StatusBarProps> = ({
  total = 0,
  completed = 0,
  icons = [],
  setInit,
  handleRestart,
}) => {
  const renderIcon = (color: string) => {
    if (color === "#FF3030") return <img src={uncheckIcon} alt="" />;
    if (color === "#FF922E") return <img src={questionIcon} alt="" />;
    if (color === "#2FBE34") return <img src={checkIcon} alt="" />;

    return null;
  };
  const isCompleted = total === completed;
  const hasUncheck = icons.includes("#FF3030");

  const titleEnd = !hasUncheck ? "🥳 Parabéns!" : "😢 Putz...";

  const subtitleEnd = !hasUncheck
    ? "Você não esqueceu de nenhum flashcard!"
    : "Ainda faltam alguns... Mas não desanime!";

  return (
    <section className={styles.statusBarContainer}>
      {isCompleted && (
        <div className={styles.endStatus}>
          <p>{titleEnd}</p>
          <p>{subtitleEnd}</p>
        </div>
      )}
      <p>
        {completed}/{total} CONCLUÍDOS
      </p>
      <div className={styles.iconsContainer}>
        {icons.map((color) => (
          <>{renderIcon(color)}</>
        ))}
      </div>
      {isCompleted && (
        <button
          className={styles.restartButton}
          onClick={() => handleRestart()}
        >
          REINICIAR RECALL
        </button>
      )}
    </section>
  );
};

export default StatusBar;
