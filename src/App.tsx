import { useState } from "react";
import styles from "./assets/styles/index.module.css";
import logo from "./assets/logo.svg";
import { Welcome, Deck } from "./containers";
import { StatusBar } from "./components";
import { deck } from "./service/deck";

function App() {
  const [init, setInit] = useState(true);
  const [completed, setCompleted] = useState(0);
  const [icons, setIcons] = useState([]);

  const handleRestart = () => {
    setInit(true);
    setCompleted(0);
    setIcons([]);
  };

  return (
    <main className={styles.containerApp}>
      {init ? (
        <Welcome setInit={setInit} />
      ) : (
        <>
          {" "}
          <img src={logo} className={styles.marginTop42} />
          <Deck deck={deck} setCompleted={setCompleted} setIcons={setIcons} />
          <StatusBar
            total={deck.length}
            completed={completed}
            icons={icons}
            setInit={setInit}
            handleRestart={handleRestart}
          />
        </>
      )}
    </main>
  );
}

export default App;
