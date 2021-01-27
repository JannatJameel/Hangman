import { PopupWrapper, Popup } from "../styles";
import UIfx from 'uifx';
import useSound from 'use-sound';
import won from './souds/won.mp3';

const PopAlert = ({selectedWord, correctLetters, wrongGuess, playAgain, wordLetters}) => {
    let finalMessage = "";
    let bodyMessage = "";
    let status = "";
    const chear = new UIfx({asset: won});

    const checkWin = ( wrong ) => {
        if(correctLetters.length > 1){
            let wordLettersSet = new Set(wordLetters);
            status = "won";
            wordLettersSet.forEach(letter => {
                if(!correctLetters.includes(letter)) status = "";
            })
        };
        if(wrong === 8) status = "lost";
        return status;
    };
    console.log(status);
    
    if(checkWin(wrongGuess) === "won"){
        finalMessage = "Wohooo you won!";
        bodyMessage = "Congratulations smarty pants.";
    }else if (checkWin(wrongGuess) === "lost"){
        finalMessage = "Opssie Woopsie...";
        bodyMessage = `The word was: ${selectedWord}`;
    };

    // const [playWon] = useSound(won);
    // let state = {
    //     value: 0,
    //   }
    // onChange = (event) => {
    //     this.setState({ value: event.target.value });
    //     chear.play();
    // };

    return (
        <PopupWrapper style={finalMessage !== ""? {display: "flex"} : {}}>
            <Popup>
                <h2>{finalMessage}</h2>
                <h3>{bodyMessage}</h3>
                <button type="button" className="btn btn-secondary" onClick={playAgain}>Play Again</button>
            </Popup>            
        </PopupWrapper>
    )
};

export default PopAlert;