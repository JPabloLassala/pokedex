import { useContext } from "react";
import { PokemonCard } from "./PokemonCard";
import { PokemonContext } from "../Stores";

export function PokemonListContianer() {
  const { pokemons, selectPokemon, filteredPokemon } = useContext(PokemonContext)!;
  const pokemonSource = filteredPokemon || pokemons;

  return (
    <div className="justify-center flex flex-row flex-wrap">
      {pokemonSource.map((p) => (
        <PokemonCard key={p.id} pokemon={p} onSelectPokemon={() => selectPokemon(p.id)} />
      ))}
    </div>
  );
}
