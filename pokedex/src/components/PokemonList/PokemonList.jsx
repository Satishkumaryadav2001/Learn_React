import { useEffect, useState } from "react";
import axios from 'axios';
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
function PokemonList(){

    const [PokemonList,setPokemonList] = useState([]);
    const [isLoding,setIsLoding] = useState(true);

    async function downloadPokemons(){
        const reponse=await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemonResults=reponse.data.results;
        const pokemonResultsPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultsPromise);
        console.log(pokemonData);

     const res=pokemonData.map((pokeData) => {
     const pokemon =pokeData.data;
     return {
         id:pokemon.id,
        name: pokemon.name,
         image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
        types:pokemon.types
        }
});
         console.log(res); 
         setPokemonList(res);
         setIsLoding(false);
    }
 
useEffect(() => {
downloadPokemons();
},[]);



return (
    <div className="pokemon-list-wrapper">
      <div>Pokemon List</div> 
       {(isLoding) ? 'Loding.....' : 
       PokemonList.map((p) =><Pokemon name={p.name} image={p.image} key={p.id}/>)
       }
    </div>

    )

}
export default PokemonList;