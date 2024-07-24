import _ from "lodash";
import { Pokemon } from "../Schemas";
import { Container, P } from "../Shared";
import { useFetchPokemonDescription } from "../Hooks/useFetchPokemonDescription";
import { useEffect, useState } from "react";
import { PokemonTypes } from "./PokemonTypes";
import { PokemonAbilities } from "./PokemonAbilities";

export function PokemonDescription({ pokemon }: { pokemon: Pokemon }) {
  const [render, setRender] = useState(false);
  const hiddenContainer = render ? "ml-2 w-1/3" : "w-0";
  const hiddenContents = render ? "" : "w-0";
  const hiddenText = render ? "" : "hidden";

  const { pokemonEntry, pokemonDescription } = useFetchPokemonDescription(pokemon);

  useEffect(() => {
    if (pokemon) {
      setTimeout(() => {
        setRender(true);
      });
    }
  }, [pokemon]);

  return (
    <div className={`${hiddenContainer} transition-all duration-500`}>
      <div className={`sticky top-0 flex flex-col items-center`}>
        <div className={`h-[100px] z-10 ${hiddenContents}`}>
          <div className={`h-[200px] max-h-[200px] ${hiddenContents}`}>
            <img
              src={pokemon?.sprites.other?.["official-artwork"].front_default}
              className={`aspect-auto h-full ${hiddenContents}`}
            />
          </div>
        </div>
        <Container
          hidden={!pokemon}
          className={`w-full flex flex-col items-center pt-24 gap-2 px-6 overflow-x-hidden ${hiddenContents}`}
        >
          {pokemon && (
            <>
              <P bold gray size="sm" className={hiddenText}>
                &#8470; {pokemon.id}
              </P>
              <P bold size="lg" className={`${hiddenText} capitalize`}>
                {pokemon.name}
              </P>
              <P gray size="sm" className={hiddenText}>
                {pokemonEntry}
              </P>
              <div className={`flex flex-row gap-2 ${hiddenText}`}>
                <PokemonTypes pokemon={pokemon} />
              </div>
              <P bold size="sm" className="uppercase">
                pokédex entry
              </P>
              <P size="sm" className={hiddenText}>
                {pokemonDescription}
              </P>
              <div className={`flex flex-row gap-2 ${hiddenContents}`}>
                <PokemonAbilities pokemon={pokemon} />
              </div>
            </>
          )}
        </Container>
      </div>
    </div>
  );
}
