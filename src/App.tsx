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
  const [goal, setGoal] = useState("");

  const handleRestart = () => {
    setInit(true);
    setCompleted(0);
    setIcons([]);
    setGoal("");
  };

  return (
    <main className={styles.containerApp}>
      {init ? (
        <Welcome setInit={setInit} onChange={setGoal} goal={goal} />
      ) : (
        <>
          <div className={styles.containerApp} style={{ marginBottom: "26vh" }}>
            <img src={logo} className={styles.marginTop42} />
            <Deck deck={deck} setCompleted={setCompleted} setIcons={setIcons} />
          </div>
          <StatusBar
            total={deck.length}
            completed={completed}
            icons={icons}
            handleRestart={handleRestart}
            goal={goal}
          />
        </>
      )}
    </main>
  );
}

export default App;
