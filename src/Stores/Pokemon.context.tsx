import { ReactNode, createContext, useState } from "react";
import { Pokemon } from "../Schemas";
import { PokemonList } from "../Schemas/PokemonList";

export type PokemonContextType = {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  selectedPokemon?: Pokemon;
  setSelectedPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>;
  pokemonList?: PokemonList[];
  setPokemonList: React.Dispatch<React.SetStateAction<PokemonList[] | undefined>>;
  selectPokemon: (id: number) => void;
};

export const PokemonContext = createContext<PokemonContextType | null>(null);

export function PokemonContextProvider({ children }: { children: ReactNode }) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const [pokemonList, setPokemonList] = useState<PokemonList[]>();

  function selectPokemon(id: number) {
    const selected = pokemons.find((p) => p.id === id);
    if (selected) {
      setSelectedPokemon(selected);
    }
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        selectedPokemon,
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
