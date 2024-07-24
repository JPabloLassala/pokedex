import { PokemonDescription } from "./PokemonDescription";
import { PokemonSearch } from "./PokemonSearch";
import { PokemonListContianer } from "./PokemonListContainer";
import { useFetchPokemon } from "../Hooks/useFetchPokemon";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../Stores";

export function PokemonPage() {
  useFetchPokemon();
  const [isPokemonSelected, setIsPokemonSelected] = useState(false);
  const { selectedPokemon } = useContext(PokemonContext)!;
  const isFullWidth = isPokemonSelected ? "w-3/4" : "w-full";

  useEffect(() => {
    if (selectedPokemon) {
      setTimeout(() => {
        setIsPokemonSelected(true);
      });
    }
  }, [selectedPokemon]);

  return (
    <main className="mx-4 w-2/3 flex flex-col gap-2 mt-4 flex-wrap items-center">
      <div className="flex flex-row w-full h-full">
        <div className={`flex flex-col ${isFullWidth} transition-all duration-500`}>
          <PokemonSearch />
          <PokemonListContianer />
        </div>
        {selectedPokemon && <PokemonDescription pokemon={selectedPokemon} />}
      </div>
    </main>
  );
}
