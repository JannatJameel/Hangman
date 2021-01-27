import {Wrapper} from "../styles";
import { MdSpaceBar } from 'react-icons/md';
import '../App.css';

let letters = "abcdefghijklmnopqrstuvwxyz ";
letters = letters.toUpperCase().split("");

const Keyboard = ({handleGuess, correctLetters, wrongLetters, keyColor}) => {
    const colors = ["btn btn-outline-secondary keyboard", "btn btn-success keyboard", "btn btn-danger keyboard"];
    correctLetters.forEach(letter => {
        keyColor.splice(letters.indexOf(letter), 1, 1);
    });
    wrongLetters.forEach(letter => {
        keyColor.splice(letters.indexOf(letter), 1, 2);
    });

    return (
        <div>
            <Wrapper>
                <button type="button" className={colors[keyColor[0]]} onClick={() => handleGuess("A")}>A</button>
                <button type="button" className={colors[keyColor[1]]} onClick={() => handleGuess("B")}>B</button>
                <button type="button" className={colors[keyColor[2]]} onClick={() => handleGuess("C")}>C</button>
                <button type="button" className={colors[keyColor[3]]} onClick={() => handleGuess("D")}>D</button>
                <button type="button" className={colors[keyColor[4]]} onClick={() => handleGuess("E")}>E</button>
                <button type="button" className={colors[keyColor[5]]} onClick={() => handleGuess("F")}>F</button>
                <button type="button" className={colors[keyColor[6]]} onClick={() => handleGuess("G")}>G</button>
                <button type="button" className={colors[keyColor[7]]} onClick={() => handleGuess("H")}>H</button>
                <button type="button" className={colors[keyColor[8]]} onClick={() => handleGuess("I")}>I</button>
            </Wrapper>
            <Wrapper>
                <button type="button" className={colors[keyColor[9]]} onClick={() => handleGuess("J")}>J</button>
                <button type="button" className={colors[keyColor[10]]} onClick={() => handleGuess("K")}>K</button>
                <button type="button" className={colors[keyColor[11]]} onClick={() => handleGuess("L")}>L</button>
                <button type="button" className={colors[keyColor[12]]} onClick={() => handleGuess("M")}>M</button>
                <button type="button" className={colors[keyColor[13]]} onClick={() => handleGuess("N")}>N</button>
                <button type="button" className={colors[keyColor[14]]} onClick={() => handleGuess("O")}>O</button>
                <button type="button" className={colors[keyColor[15]]} onClick={() => handleGuess("P")}>P</button>
                <button type="button" className={colors[keyColor[16]]} onClick={() => handleGuess("Q")}>Q</button>
                <button type="button" className={colors[keyColor[17]]} onClick={() => handleGuess("R")}>R</button>
            </Wrapper>
            <Wrapper>
                <button type="button" className={colors[keyColor[18]]} onClick={() => handleGuess("S")}>S</button>
                <button type="button" className={colors[keyColor[19]]} onClick={() => handleGuess("T")}>T</button>
                <button type="button" className={colors[keyColor[20]]} onClick={() => handleGuess("U")}>U</button>
                <button type="button" className={colors[keyColor[21]]} onClick={() => handleGuess("V")}>V</button>
                <button type="button" className={colors[keyColor[22]]} onClick={() => handleGuess("W")}>W</button>
                <button type="button" className={colors[keyColor[23]]} onClick={() => handleGuess("X")}>X</button>
                <button type="button" className={colors[keyColor[24]]} onClick={() => handleGuess("Y")}>Y</button>
                <button type="button" className={colors[keyColor[25]]} onClick={() => handleGuess("Z")}>Z</button>
                <button type="button" className={colors[keyColor[26]]} onClick={() => handleGuess(" ")}><MdSpaceBar/></button>
            </Wrapper>
        </div>
    );
};

export default Keyboard;