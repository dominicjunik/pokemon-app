import React from "react";

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

export default function Index({ pokemon }) {
    return (
        <div style={myStyle}>
            <h1>See all the pokemon!</h1>
            <ul>
                {pokemon.map( (poke) => <li>{poke.name[0].toUpperCase() + poke.name.slice(1)}</li>)}
            </ul>
        </div>
    )
}