import { PokemonDescription } from "./PokemonDescription";
import { PokemonSearch } from "./PokemonSearch";
import { PokemonListContianer } from "./PokemonListContainer";
import { useFetchPokemon } from "../Hooks/useFetchPokemon";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../Stores";
import { PokemonListPlaceholder } from "./PokemonListPlaceholder";
import { PokemonSearchPlaceholder } from "./PokemonSearchPlaceHolder";

export function PokemonPage() {
  const { isLoading } = useFetchPokemon();
  const [isPokemonSelected, setIsPokemonSelected] = useState(false);
  const { selectedPokemon, unselectPokemon } = useContext(PokemonContext)!;
  const isFullWidth = isPokemonSelected ? "w-3/4" : "w-full";

  function handleCloseDescription() {
    setIsPokemonSelected(false);
    setTimeout(() => {
      unselectPokemon();
    }, 500);
  }

  useEffect(() => {
    if (selectedPokemon) {
      setTimeout(() => {
        setIsPokemonSelected(true);
      });
    }
  }, [selectedPokemon]);

  return (
    <main className="flex flex-col gap-2 mt-4 flex-wrap items-center">
      {!isLoading && <PokemonSearch />}
      {isLoading && <PokemonSearchPlaceholder />}
      <div className="flex flex-row w-full h-full">
        <div className={`flex flex-col ${isFullWidth} transition-all duration-1000`}>
          {!isLoading && <PokemonListContianer />}
          {isLoading && <PokemonListPlaceholder />}
        </div>
        {selectedPokemon && (
          <PokemonDescription pokemon={selectedPokemon} onClose={handleCloseDescription} />
        )}
      </div>
    </main>
  );
}
