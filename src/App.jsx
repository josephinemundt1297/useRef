import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // Hier die Hooks use...
  const inputingRef = useRef(null);
  // Hier meine Funktionen für die Logik

  function autoFokus() {}
  useEffect(() => {
    inputingRef.current?.focus();
  }, []);

  function handleFocus() {
    inputingRef.current?.focus();
  }

  function clearFocus() {
    console.log("Eingabe leeren und fokussieren");
    inputingRef.current.focus();
    inputingRef.current.value = "";
  }

  return (
    <>
      <h1>useRef Playground</h1>
      <form>
        <input ref={inputingRef} type="text" placeholder="Name"></input>
        <input type="button" type="text" placeholder="Nachname" />
        <input type="button" type="email" placeholder="E-Mail" />
        <button onClick={handleFocus} type="button">
          Fokus setzen
        </button>
        <button onClick={clearFocus} type="button">
          Eingabe leeren und fokussieren
        </button>
        <div>Werte ohne Re-Render speichern</div>
        <div>Vergleich von useRef und State</div>
      </form>
    </>
  );
}

export default App;
