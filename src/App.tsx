import { useState } from "react";
import styles from "./assets/styles/index.module.css";
import logo from "./assets/logo.svg";
import { Welcome, Deck } from "./containers";
import { deck } from "./service/deck";

function App() {
  const [init, setInit] = useState(true);

  return (
    <main className={styles.containerApp}>
      {init ? (
        <Welcome setInit={setInit} />
      ) : (
        <>
          {" "}
          <img src={logo} className={styles.marginTop42} />
          <Deck deck={deck} />
        </>
      )}
    </main>
  );
}

export default App;
