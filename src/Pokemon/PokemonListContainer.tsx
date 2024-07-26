import { useContext, useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { PokemonContext } from "../Stores";

export function PokemonListContianer() {
  const { pokemons, selectPokemon, filteredPokemon, selectedPokemon } = useContext(PokemonContext)!;
  const [hiddenInMobile, setHiddenInMobile] = useState(false);
  const pokemonSource = filteredPokemon || pokemons;

  useEffect(() => {
    if (selectedPokemon) {
      setTimeout(() => {
        setHiddenInMobile(true);
      }, 500);
    }
  }, [selectedPokemon]);

  return (
    <div
      id="pokemonListContainer"
      className={`${hiddenInMobile ? "hidden lg:flex" : ""} justify-center flex flex-row flex-wrap`}
    >
      {pokemonSource.map((p) => (
        <PokemonCard key={p.id} pokemon={p} onSelectPokemon={() => selectPokemon(p.id)} />
      ))}
    </div>
  );
}
