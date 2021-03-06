import React, { useState } from "react";
import UserInput from "./input/UserInput";
import TipSelection from "./input/TipSelection";
import ResultCard from "./output/ResultCard";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  function handleBill(bill) {
    setBill(bill);
  }

  function handleTip(tip) {
    setTip(tip);
  }

  function handlePeople(people) {
    setPeople(people);
  }

  function resetHandler() {
    setBill("");
    setTip(0);
    setPeople("");
  }

  return (
    <div>
      <header>
        <span className="logo">SPLI</span>
        <br />
        <span className="logo">TTER</span>
      </header>
      <div className="card row card-content">
        <div className="column">
          <UserInput onAdd={handleBill} title="Bill" value={bill} />

          {/* render a new tip selection to reset the status */}
          {tip === 0 && <TipSelection onSelected={handleTip} />}
          {tip !== 0 && <TipSelection onSelected={handleTip} />}
          <UserInput
            onAdd={handlePeople}
            title="Number of People"
            value={people}
          />
        </div>
        <div className="column right-column">
          <ResultCard
          //fix the infinity and NaN issue
          //just change the logic a little bit. 
          //You should check the existence of bill, tip and people, and only get output when all of them exist
            tipAmount={(bill && tip) ? ((bill * tip) / 100).toFixed(2) : "0.00"}
            total={
              (bill && tip && people)
                ? ((bill * (1 + tip / 100)) / people).toFixed(2)
                : "0.00"
            }
            onReset={resetHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
