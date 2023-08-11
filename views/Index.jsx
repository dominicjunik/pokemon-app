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
                {pokemon.map( (poke) => <li key={poke._id}><a href={`/pokemon/${poke._id}`}>{poke.name[0].toUpperCase() + poke.name.slice(1)}</a></li>)}
            </ul>

            <form action="/pokemon/new">
                <button>New</button>
            </form>
        </div>
    )
}

