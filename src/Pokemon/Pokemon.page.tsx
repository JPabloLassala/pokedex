import { PokemonDescription } from "./PokemonDescription";
import { PokemonSearch } from "./PokemonSearch";
import { PokemonListContianer } from "./PokemonListContainer";
import { useFetchPokemon } from "../Hooks/useFetchPokemon";
import { useContext } from "react";
import { PokemonContext } from "../Stores";

export function PokemonPage() {
  useFetchPokemon();
  const { selectedPokemon } = useContext(PokemonContext)!;
  const isFullWidth = selectedPokemon ? "w-3/4" : "w-full";

  return (
    <main className="mx-4 w-2/3 flex flex-col gap-2 mt-4 flex-wrap items-center">
      <div className="flex flex-row w-full gap-12">
        <div className={`flex flex-col ${isFullWidth} transition-all duration-500`}>
          <PokemonSearch />
          <PokemonListContianer />
        </div>
        <PokemonDescription pokemon={selectedPokemon} />
      </div>
    </main>
  );
}
