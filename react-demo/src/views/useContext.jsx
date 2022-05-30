import { useContext } from "react";
import Text from "../contexts/text";

export default function() {
    const text = useContext(Text);
    return <h1>{text}</h1>;
}