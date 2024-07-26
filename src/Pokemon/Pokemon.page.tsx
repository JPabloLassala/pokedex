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
  const isFullWidth = isPokemonSelected ? "md:w-3/4" : "w-full";
  const isSmZeroWidth = isPokemonSelected
    ? "w-0 md:scale-x-100 scale-x-0 overflow-x-hidden"
    : "w-full";

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
        <div
          className={`${isSmZeroWidth} flex flex-col ${isFullWidth} transition-all duration-500 origin-left`}
        >
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
