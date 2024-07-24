import { useContext } from "react";
import { PokemonCard } from "./PokemonCard";
import { PokemonContext } from "../Stores";

export function PokemonListContianer() {
  const { pokemons, selectPokemon } = useContext(PokemonContext)!;

  return (
    <div className={`justify-center flex flex-row flex-wrap transition-all`}>
      {pokemons.map((p) => (
        <PokemonCard key={p.id} pokemon={p} onSelectPokemon={() => selectPokemon(p.id)} />
      ))}
    </div>
  );
}
