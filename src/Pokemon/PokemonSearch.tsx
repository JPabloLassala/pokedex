import { useContext, useRef, useState } from "react";
import { Container, PokeballSvg } from "../Shared";
import { PokemonContext } from "../Stores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function PokemonSearch() {
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const { filterPokemon, resetFilter } = useContext(PokemonContext)!;

  function handleEnterToSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      filterPokemon(searchRef.current?.value || "");
    }
  }

  function handleResetSearch() {
    searchRef.current!.value = "";
    resetFilter();
  }

  return (
    <Container className="h-14 flex flex-row items-center w-full">
      <input
        type="text"
        ref={searchRef}
        onKeyDown={handleEnterToSearch}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="Search Pokemon"
        className="h-full w-full placeholder:text-gray-500 font-body px-4 rounded-xl"
      />
      <button
        onClick={handleResetSearch}
        className="h-3/4 aspect-square flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faXmark} className="text-gray-500 h-1/2" />
      </button>
      <button className="rounded-2xl bg-red-500 mr-4 h-3/4 w-auto aspect-square flex items-center border border-red-800">
        <PokeballSvg className="stroke-white stroke-2 h-full w-full m-2" />
      </button>
    </Container>
  );
}
