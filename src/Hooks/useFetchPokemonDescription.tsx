import { useEffect, useState } from "react";
import { Pokemon, PokemonDescription } from "../Schemas";
import axios from "axios";

export function useFetchPokemonDescription(pokemon: Pokemon) {
  const [pokemonSpeciesData, setPokemonSpeciesData] = useState<PokemonDescription | null>(null);
  const [pokemonEntry, setPokemonEntry] = useState<string>();
  const [pokemonDescription, setPokemonDescription] = useState<string>();

  useEffect(() => {
    async function fetchPokemonList() {
      const response = await axios.get<PokemonDescription>(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`,
      );
      const data = response.data;
      const generaEng = data.genera.find((genus) => genus.language.name === "en");
      const descriptionEng = data.flavor_text_entries.find(
        (flavor) => flavor.language.name === "en",
      );
      setPokemonEntry(generaEng?.genus);
      setPokemonDescription(descriptionEng?.flavor_text);
    }

    fetchPokemonList();
  }, [pokemon]);

  return { pokemonEntry, pokemonDescription, pokemonSpeciesData, setPokemonSpeciesData };
}
