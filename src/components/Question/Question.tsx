import React, { useState, Dispatch, SetStateAction } from "react";
import styles from "./Question.module.css";
import arrow from "../../assets/arrow_right.svg";
import rotate from ".././../assets/rotate.svg";
import checkIcon from ".././../assets/check.svg";
import uncheckIcon from ".././../assets/uncheck.svg";
import questionIcon from "../../assets/question.svg";

interface QuestionProps {
  id: number;
  question: string;
  response: string;
  setCompleted: Dispatch<SetStateAction<number>>;
  setIcons: Dispatch<SetStateAction<string[]>>;
}

const Question: React.FC<QuestionProps> = ({
  id,
  question,
  response,
  setCompleted,
  setIcons,
}) => {
  const [stage, setStage] = useState("");
  const [color, setColor] = useState("");

  if (stage === "question") {
    return (
      <div className={styles.containerQ}>
        <p>{question}</p>
        <section
          className={styles.buttonResponse}
          onClick={() => setStage("response")}
        >
          <img src={rotate} />
        </section>
      </div>
    );
  }

  const handleSelect = (color: string) => {
    setColor(color);
    setIcons((prev) => [...prev, color]);
    setStage("");
    setCompleted((prev) => prev + 1);
  };

  if (stage === "response") {
    return (
      <div className={styles.containerQ}>
        <p>{response}</p>
        <section className={styles.buttonsOptions}>
          <button
            className={styles.buttonsResRed}
            onClick={() => handleSelect("#FF3030")}
          >
            Não lembrei
          </button>
          <button
            className={styles.buttonsResOrange}
            onClick={() => handleSelect("#FF922E")}
          >
            Quase não lembrei
          </button>
          <button
            className={styles.buttonsResGreen}
            onClick={() => handleSelect("#2FBE34")}
          >
            Zap!
          </button>
        </section>
      </div>
    );
  }

  const props = {
    style: {
      textDecoration: color ? "line-through" : "unset",
      color,
    },
  };

  return (
    <div
      className={styles.questionContainer}
      onClick={() => setStage("question")}
    >
      <div className={styles.questionLeft}>
        <p className={styles.textQuestion} {...props}>
          Pergunta {id + 1}
        </p>
      </div>
      {!color && <img src={arrow} alt="" />}
      {color === "#FF3030" && <img src={uncheckIcon} alt="" />}
      {color === "#FF922E" && <img src={questionIcon} alt="" />}
      {color === "#2FBE34" && <img src={checkIcon} alt="" />}
    </div>
  );
};

export default Question;
