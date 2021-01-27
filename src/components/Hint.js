import { useState } from "react";
import { PopupWrapper, Popup } from "../styles";

const Hint = ({help, setHelp}) => {

    return (
        <PopupWrapper style={help !== null? {display: "flex"} : {}}>
            <Popup>
                <h3>Hint !</h3>
                <p>{help}</p>
                <button type="button" className="btn btn-secondary" onClick={() => setHelp(null)}>Close</button>
            </Popup>            
        </PopupWrapper>
    )
};

export default Hint;