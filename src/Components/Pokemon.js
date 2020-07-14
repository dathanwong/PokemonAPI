import React, { useState, useEffect } from 'react';

const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState([]);

    function fetchPokemon(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }

    return ( 
        <div className="container">
            <div className="row my-3">
                <div className="col text-center">
                    <button onClick={fetchPokemon} className="btn btn-secondary">Fetch Pokemon</button>
                </div>
            </div>
            <div className="row justify-content-center">
                <ul>
                    {pokemon.map((p, index) =>
                        <li key={index}>{p.name}</li>
                    )}
                </ul>
            </div>
        </div>
     );
}
 
export default Pokemon;