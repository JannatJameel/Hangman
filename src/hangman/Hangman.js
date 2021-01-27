import {Wrapper, Images} from "../styles";
import step0 from "./00.png"
import step1 from "./01.png"
import step2 from "./02.png"
import step3 from "./03.png"
import step4 from "./04.png"
import step5 from "./05.png"
import step6 from "./06.png"
import step7 from "./07.png"
import step8 from "./08.png"


const images = [step0, step1, step2, step3, step4, step5, step6, step7, step8];

const Hangman = ({wrongGuess}) => {
    return (
        <Wrapper>
            <Images src={images[wrongGuess]}/>
        </Wrapper>
        
    );
};

export default Hangman;