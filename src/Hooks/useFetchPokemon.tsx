import { useContext, useEffect } from "react";
import { PokemonContext } from "../Stores";
import { PokemonList } from "../Schemas/PokemonList";
import { Pokemon } from "../Schemas";
import axios, { AxiosResponse } from "axios";

export function useFetchPokemon() {
  const { setPokemonList, setPokemons, pokemonList } = useContext(PokemonContext)!;
  useEffect(() => {
    async function fetchPokemonList() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await response.json();
      setPokemonList(data.results);
    }

    fetchPokemonList();
  }, []);

  useEffect(() => {
    async function fetchAllPokemonData(listData: PokemonList[]) {
      const response = await Promise.allSettled(
        listData.map((_, i) => {
          return axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${i + 1}`);
        }),
      );
      setPokemons(
        response
          .filter((res) => res.status === "fulfilled")
          .map((res) => {
            return (res as PromiseFulfilledResult<AxiosResponse<Pokemon>>).value.data;
          }),
      );
    }

    if (pokemonList?.length) {
      fetchAllPokemonData(pokemonList);
    }
  }, [pokemonList]);
}
