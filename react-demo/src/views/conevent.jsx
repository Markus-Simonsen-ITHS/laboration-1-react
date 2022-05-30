import { useState } from "react";

export default function() {
    const [clicked, setClicked] = useState(false);
    function handleClick() {
        setClicked(!clicked);
    }
    return (
        <div>
            <h1>Conevent</h1>
            <button onClick={handleClick}>Click me</button>
            {clicked && <h1>Clicked</h1>}
            {clicked ? <h1>Clicked</h1> : <h1>Not clicked</h1>}
        </div>
    );
}