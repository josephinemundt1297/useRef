import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // Hier die Hooks use...
  const inputingRef = useRef(null);
  const nachnameRef = useRef(null);
  const emailRef = useRef(null);
  const [anfangsDings, setDings] = useState("");
  const renderCount = useRef(0);
  renderCount.current += 1;
  // Hier meine Funktionen für die Logik

  function autoFokus() {
    if (inputingRef.current.value === "") {
      inputingRef.current.focus();
    } else if (nachnameRef.current.value === "") {
      nachnameRef.current.focus();
    } else if (emailRef.current.value === "") {
      emailRef.current.focus();
    }
  }
  // useEffect(() => {
  //   inputingRef.current?.focus();
  // }, []);

  // function handleFocus() {
  //   inputingRef.current?.focus();
  //   nachnameRef.current?.focus();
  //   emailRef.current?.focus();
  // }

  function clearFocus() {
    console.log("Eingabe leeren und fokussieren");
    inputingRef.current.value = "";
    nachnameRef.current.value = "";
    emailRef.current.value = "";
  }

  return (
    <>
      <h1>useRef Playground</h1>
      <form>
        <input ref={inputingRef} type="text" placeholder="Name"></input>
        <input
          ref={nachnameRef}
          type="button"
          type="text"
          placeholder="Nachname"
        />
        <input ref={emailRef} type="button" type="email" placeholder="E-Mail" />
        <textarea
          name="dings"
          id="da"
          placeholder="Text mit Humor eingeben "
          value={anfangsDings}
          onChange={(e) => setDings(e.target.value)}
        />
        <div>Renders: {renderCount.current}</div>
        <button onClick={autoFokus} type="button">
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
