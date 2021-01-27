import {Letters, Wrapper} from "../styles"

const WordDisplay = ({wordLetters, correctLetters}) => {
    let guessed = [];
    wordLetters.forEach((letter) => guessed.push(" __ "));
    
    const handleDisplay = () => wordLetters.forEach((letter, i) => {
        if (correctLetters.includes(letter)) {
            if (letter === " "){
                guessed.splice(i, 1, "...");
            }else{
                guessed.splice(i, 1, letter);
            }
        }else{
            console.log("");
        }
    });

    handleDisplay();

    return (
        <Wrapper style={{margin: "0 auto 20px auto"}}>
            <Letters>{guessed.join("")}</Letters>
        </Wrapper>
    );
};

export default WordDisplay;