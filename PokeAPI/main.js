console.log("Hello World!");

const getPokemon = document.getElementById("get-pokemon");

getPokemon.addEventListener("click", async () => {
    try {
        const getRandomID = Math.floor(Math.random() * 898) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomID}`);
        const pokemon = await response.json();
        //console.log(pokemon);
        displayPokemonData(pokemon);
        //playPokemonSound(getRandomID);
    }
    catch (error) {
        console.error("Error fetching Pokémon data from the API: ", error);
    }
})


function displayPokemonData(pokemon) {
    // create the pokemon container
    const pokemonContainer = document.getElementById("pokemon-container");
    pokemonContainer.textContent = "";
    // create the name element
    const nameElement = document.createElement("h2");
    nameElement.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonContainer.appendChild(nameElement);
    // create images
    const imageElement = document.createElement("img");
    const spriteURL = pokemon.sprites.front_default;
    //const shiny = pokemon.sprites.front_shiny;
    if (spriteURL) {
        imageElement.src = pokemon.sprites.front_default;
        imageElement.alt = pokemon.name;
        pokemonContainer.appendChild(imageElement);
    }
    else {
        console.log("Error, no image found!");
        const placeholderText = document.createElement("p");
        placeholderText.textContent = "No sprite found for this Pokémon!";
    }
    // create the ID description
    const pokemonIDElement = document.createElement("p");
    pokemonIDElement.textContet = `ID: ${pokemon.id}`;
    pokemonContainer.appendChild(pokemonIDElement);
    // create the height description
    const heightElement = document.createElement("p");
    heightElement.textContent = `Height: ${pokemon.height / 10}m`;
    // create the weight description
    const weightElement = document.createElement("p");
    weightElement.textContent = `Weight: ${pokemon.weight / 10}kg`;
    // create the Pokemon element description
    const typeElement = document.createElement("p");
    const types = pokemon.types.map(typeInfo => typeInfo.type.name).join(", ");
    typeElement.textContent = `Type: ${types}`
    pokemonContainer.appendChild(typeElement);

    const statElement = document.createElement("p");
    const stats = pokemon.stats.map(statInfo => statInfo.stat.name).join(", ")
    //console.log(stats);
    statElement.textContent = `Stats: ${stats}`;
    pokemonContainer.appendChild(statElement);
}

// async function playPokemonSound(pokemonId) {
//     try {
//         const response = await fetch(`https://pokeapi.com/api/v2/pokemon-species/${pokemonId}`);
//         if (!response.ok) {
//             throw new Error("Network returned code 201!")
//         }
//         const species = await response.json();
//         const cryURL = species.cries;
//         if (cryURL) {
//             const audio = new Audio(cryURL);
//             audio.play().catch(error => console.error(error));
//         }
//         else {
//             console.error("No .ogg sound file found for this Pokémon!, check https://pokeapi.co for more details!");
//         }

//     } catch (error) {
//         console.error(error);
//     }
// }