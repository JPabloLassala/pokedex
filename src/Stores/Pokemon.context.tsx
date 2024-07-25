import { ReactNode, createContext, useState } from "react";
import { Pokemon } from "../Schemas";
import { PokemonList } from "../Schemas/PokemonList";

export type PokemonContextType = {
  pokemons: Pokemon[];
  selectedPokemon?: Pokemon;
  filteredPokemon: Pokemon[] | undefined;
  pokemonList?: PokemonList[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  setSelectedPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>;
  setPokemonList: React.Dispatch<React.SetStateAction<PokemonList[] | undefined>>;
  selectPokemon: (id: number) => void;
  filterPokemon: (name: string) => void;
  resetFilter: () => void;
};

export const PokemonContext = createContext<PokemonContextType | null>(null);

export function PokemonContextProvider({ children }: { children: ReactNode }) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[] | undefined>();
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const [pokemonList, setPokemonList] = useState<PokemonList[]>();

  function selectPokemon(id: number) {
    const selected = pokemons.find((p) => p.id === id);
    if (selected) {
      setSelectedPokemon(selected);
    }
  }

  function filterPokemon(name: string) {
    if (name === "") {
      return resetFilter();
    }

    const filtered = pokemons.filter((p) => p.name.toUpperCase().includes(name.toUpperCase()));
    setFilteredPokemon(filtered);
  }

  function resetFilter() {
    setFilteredPokemon(undefined);
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        selectedPokemon,
        filteredPokemon,
        filterPokemon,
        resetFilter,
        setSelectedPokemon,
        selectPokemon,
        pokemonList,
        setPokemonList,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
