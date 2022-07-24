import React, { Dispatch, SetStateAction } from "react";
import { Question } from "../../components";

interface DeckProps {
  deck: { Q: string; R: string }[];
  setCompleted: Dispatch<SetStateAction<number>>;
  setIcons: Dispatch<SetStateAction<any>>;
}

const Deck: React.FC<DeckProps> = ({ deck = [], setCompleted, setIcons }) => {
  return (
    <>
      {deck.map((deck, index) => (
        <Question
          id={index}
          question={deck.Q}
          response={deck.R}
          setCompleted={setCompleted}
          setIcons={setIcons}
        />
      ))}
    </>
  );
};

export default Deck;
