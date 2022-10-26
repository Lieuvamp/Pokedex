const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const Form = document.querySelector('.form');
const Input = document.querySelector('.input__search');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    if (APIResponse.status = 200) {
        const data = await APIResponse.json();
        return data;
    }   
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...';

    const data = await fetchPokemon(pokemon);

    if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    Input.value = '';
    } else {
    pokemonName.innerHTML = 'Not Found';
    pokemonNumber.innerHTML = '';
    }
}

Form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(Input.value);  
});

