import React, { Dispatch, SetStateAction } from "react";
import { Question } from "../../components";
import { shuffle } from "lodash";

interface DeckProps {
  deck: { Q: string; R: string }[];
  setCompleted: Dispatch<SetStateAction<number>>;
  setIcons: Dispatch<SetStateAction<any>>;
}

const Deck: React.FC<DeckProps> = ({ deck = [], setCompleted, setIcons }) => {
  const shuffledDeck = shuffle(deck);
  return (
    <>
      {shuffledDeck.map((deck, index) => (
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
