import { useState } from "react"
import Output from "./Output";

function Greeting() {

    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <Output>It's good to see you!</Output>}
            {/* <p>It's good to see you!</p> */}
            {changedText && <Output>Changed!</Output>}
            <button onClick={changeTextHandler}>Change text!</button>
        </div>
    )
}

export default Greeting
