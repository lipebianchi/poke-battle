const pokeAPI = {}


pokeAPI.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
}


pokeAPI.getPokemonsStats = (offset = 0, limit = 2) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemon) => pokemon.map(pokeAPI.getPokemonsDetails))
        .then((pokemonPromise) => Promise.all(pokemonPromise))
        .then(( pokemonDetails)=> pokemonDetails)
        .then((pokemons) => pokemons)
}

module.exports = pokeAPI;





