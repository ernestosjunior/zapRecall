import React, { useState } from "react";
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
}

const Question: React.FC<QuestionProps> = ({ id, question, response }) => {
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

  if (stage === "response") {
    return (
      <div className={styles.containerQ}>
        <p>{response}</p>
        <section className={styles.buttonsOptions}>
          <button
            className={styles.buttonsResRed}
            onClick={() => {
              setColor("#FF3030");
              setStage("");
            }}
          >
            Não lembrei
          </button>
          <button
            className={styles.buttonsResOrange}
            onClick={() => {
              setColor("#FF922E");
              setStage("");
            }}
          >
            Quase não lembrei
          </button>
          <button
            className={styles.buttonsResGreen}
            onClick={() => {
              setColor("#2FBE34");
              setStage("");
            }}
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
