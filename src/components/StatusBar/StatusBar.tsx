import React, { Dispatch, SetStateAction } from "react";
import styles from "./StatusBar.module.css";
import checkIcon from ".././../assets/check.svg";
import uncheckIcon from ".././../assets/uncheck.svg";
import questionIcon from "../../assets/question.svg";

interface StatusBarProps {
  total: number;
  completed: number;
  icons: string[];
  handleRestart: () => void;
  goal: string;
}

const StatusBar: React.FC<StatusBarProps> = ({
  total = 0,
  completed = 0,
  icons = [],
  handleRestart,
  goal,
}) => {
  const renderIcon = (color: string) => {
    if (color === "#FF3030") return <img src={uncheckIcon} alt="" />;
    if (color === "#FF922E") return <img src={questionIcon} alt="" />;
    if (color === "#2FBE34") return <img src={checkIcon} alt="" />;

    return null;
  };
  const correctArr = icons.filter((icon) => icon === "#2FBE34");
  const isCompleted = total === completed;
  const isSuccess = isCompleted && correctArr.length >= Number(goal);
  const titleEnd = isSuccess ? "🥳 Parabéns!" : "😢 Putz...";
  const subtitleEnd = isSuccess
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
