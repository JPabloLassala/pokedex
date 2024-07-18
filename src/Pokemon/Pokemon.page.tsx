import { useEffect, useState } from "react";
import { PokemonList } from "../Schemas/PokemonList";
import { Pokemon } from "../Schemas";
import { PokemonCard } from "./PokemonCard";
import axios, { AxiosResponse } from "axios";

export function PokemonPage() {
  const [listData, setListData] = useState<PokemonList[]>();
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  useEffect(() => {
    async function fetchPokemonList() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await response.json();
      setListData(data.results);
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
      setPokemonData(
        response
          .filter((res) => res.status === "fulfilled")
          .map((res) => {
            return (res as PromiseFulfilledResult<AxiosResponse<Pokemon>>).value.data;
          }),
      );
    }

    if (listData?.length) {
      fetchAllPokemonData(listData);
    }
  }, [listData]);

  return (
    <main className="w-full mx-4 flex flex-row gap-2 mt-4 flex-wrap">
      {pokemonData.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </main>
  );
}
