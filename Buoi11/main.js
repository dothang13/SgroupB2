async function fetchData(){
    const data = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    console.log(data[0]);
}