import { ReactNode, createContext, useState } from "react";
import { Pokemon } from "../Schemas";

export type PokemonContextType = {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

export const PokemonContext = createContext<PokemonContextType | null>(null);

export function AlquileresContextProvider({ children }: { children: ReactNode }) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>{children}</PokemonContext.Provider>
  );
}
