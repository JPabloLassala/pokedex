import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../Schemas";
import { PokemonList } from "../Schemas/PokemonList";
import { Container } from "../Shared";
import { PokeballSvg } from "../Shared/PokeballSvg";
import { PokemonCard } from "./PokemonCard";
import { FireTypeBadge } from "../Shared/PokemonTypes/Fire";

export function PokemonPage() {
  const [listData, setListData] = useState<PokemonList[]>();
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
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

  function handleSelectPokemon(id: number) {
    const selected = pokemonData.find((p) => p.id === id);
    if (selected) {
      setSelectedPokemon(selected);
    }
  }

  return (
    <main className="mx-4 w-3/4 flex flex-col gap-2 mt-4 flex-wrap items-center">
      <Container className="h-14 flex flex-row items-center w-full">
        <input
          type="text"
          placeholder="Search Pokemon"
          className="h-full w-full placeholder:text-gray-500 font-body px-4 rounded-xl"
        />
        <button className="rounded-2xl bg-red-500 m-4 h-3/4 w-auto aspect-square flex lex-row justify-center items-center drop-shadow-lg">
          <PokeballSvg className="stroke-white stroke-2 h-full w-full m-2" />
        </button>
      </Container>
      <div className="flex flex-row w-full gap-12">
        <div className="gap-10 justify-center grid grid-cols-3 w-2/3">
          {pokemonData.map((p) => (
            <PokemonCard key={p.id} pokemon={p} onSelectPokemon={() => handleSelectPokemon(p.id)} />
          ))}
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <div className="h-[100px] z-10">
            <div className="h-[200px] max-h-[200px] aspect-square">
              <img
                src={selectedPokemon?.sprites.other?.["official-artwork"].front_default}
                className="aspect-auto"
              />
            </div>
          </div>
          <Container className="h-full w-full flex flex-col items-center">
            <FireTypeBadge />
          </Container>
        </div>
      </div>
    </main>
  );
}
