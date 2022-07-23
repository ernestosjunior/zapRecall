import React from "react";
import { Question } from "../../components";

interface DeckProps {
  deck: { Q: string; R: string }[];
}

const Deck: React.FC<DeckProps> = ({ deck = [] }) => {
  return (
    <>
      {deck.map((deck, index) => (
        <Question id={index} question={deck.Q} response={deck.R} />
      ))}
    </>
  );
};

export default Deck;
