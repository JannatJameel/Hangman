import { useState } from "react";

// components
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import Hangman from "./hangman/Hangman";
import PopAlert from "./components/Popup";
import Hint from "./components/Hint";
import { Title } from "./styles";
import { Hints } from "./styles";

// data
import words from "./words";

let selectedPerson = words[Math.floor(Math.random() * words.length)];
let selectedWord = selectedPerson.word;
const wordLetters = selectedWord.toUpperCase().split("");
const name = selectedPerson.name;
const hint = selectedPerson.hint;
let keyColor = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState ([]);
  const [wrongGuess, setWrongGuess] = useState(0);
  const [help, setHelp] = useState(null);

  const handleGuess = (letter) => {
    if (wordLetters.includes(letter)) {
      setCorrectLetters([...correctLetters, letter]);
    }else{
      setWrongLetters([...wrongLetters, letter]);
      setWrongGuess(wrongGuess + 1);
    }
  };

  const playAgain = () => {
    setCorrectLetters([]);
    setWrongLetters([]);
    setWrongGuess(0);
    setHelp(null);
    selectedPerson = words[Math.floor(Math.random() * words.length)];
    selectedWord = selectedPerson.word; 
    keyColor = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  };

  return (
    <div style={{backgroundColor: "#D1DEE7"}}>
      <div>
        <Title>Lets Play Hangman!</Title>
        <div className="container">
          <div className="row">
            <div className="col">
              <Hangman wrongGuess={wrongGuess}/>
            </div>
            <div className="col-xs">
              <p>Wrong guess: {wrongGuess} of 8</p>
              <p>Click below for hints:</p>
              <div>
                <Hints type="button" className="btn btn-secondary" onClick={() => setHelp(name)}>Guest of Honour</Hints>
              </div>
              <br/>
              <div>
                <Hints type="button" className="btn btn-secondary" onClick={() => setHelp(hint)}>Fun Fact</Hints>
              </div>
            </div>
          </div>
        </div>
        <WordDisplay wrongLetters={wrongLetters} wordLetters={wordLetters} correctLetters={correctLetters}/>
        <Keyboard keyColor={keyColor} handleGuess={handleGuess} wrongLetters={wrongLetters} correctLetters={correctLetters}/>
      </div>
      <PopAlert wordLetters={wordLetters} selectedWord={selectedWord} correctLetters={correctLetters} wrongGuess={wrongGuess} playAgain={playAgain}/>
      <Hint help={help} setHelp={setHelp}/>
    </div>
  );
}

export default App;
