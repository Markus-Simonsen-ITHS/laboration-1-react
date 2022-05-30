import { useEffect, useState } from "react";

export default function() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://avancera.app/cities")
            .then(response => response.json())
            .then(json => setData(json));
    }, []);
    return (
        <div>
        <h1>Fetch</h1>
        <ul>
            {data.map(city => (
                <li key={city.id}>
                    <h1>{city.name}</h1>
                </li>
            ))}
        </ul>
        </div>
    );
}