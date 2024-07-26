import { Pokemon } from "../Schemas";
import { Container, P } from "../Shared";
import { useFetchPokemonDescription } from "../Hooks/useFetchPokemonDescription";
import { useEffect, useState } from "react";
import { PokemonTypes } from "./PokemonTypes";
import { PokemonAbilities } from "./PokemonAbilities";
import { CloseDescriptionButon } from "./CloseDescriptionButton";

export function PokemonDescription({
  pokemon,
  onClose,
}: {
  pokemon: Pokemon;
  onClose: () => void;
}) {
  const [render, setRender] = useState(false);
  const hiddenContainer = render ? "ml-2 w-1/3" : "w-0 scale-x-0 opacity-0";
  const hiddenText = render ? "" : "scale-x-0";
  const { pokemonEntry, pokemonDescription } = useFetchPokemonDescription(pokemon);

  function handleClose() {
    setRender(false);
    onClose();
  }

  useEffect(() => {
    if (pokemon) {
      setTimeout(() => {
        setRender(true);
      });
    }
  }, [pokemon]);

  return (
    <div
      className={`${hiddenContainer} transition-all duration-1000 origin-right whitespace-nowrap`}
    >
      <div className={`relative flex flex-col items-center`}>
        <CloseDescriptionButon onClose={handleClose} />
        <div className={`h-[100px] z-10`}>
          <div className={`h-[200px] max-h-[200px]`}>
            <img
              src={pokemon?.sprites.other?.["official-artwork"].front_default}
              className={`aspect-auto h-full`}
            />
          </div>
        </div>
        <Container hidden={!pokemon} className="w-full flex flex-col items-center pt-24 gap-2 px-6">
          {pokemon && (
            <>
              <P bold gray size="sm">
                &#8470; {pokemon.id}
              </P>
              <P bold size="lg" className="capitalize">
                {pokemon.name}
              </P>
              <P gray size="sm">
                {pokemonEntry}
              </P>
              <div className="flex flex-row gap-2">
                <PokemonTypes pokemon={pokemon} />
              </div>
              <P bold size="sm" className="uppercase">
                pokédex entry
              </P>
              <P
                size="sm"
                className={`transition-all duration-500 whitespace-normal ${hiddenText}`}
              >
                {pokemonDescription}
              </P>
              <div className="flex flex-row gap-2">
                <PokemonAbilities pokemon={pokemon} />
              </div>
            </>
          )}
        </Container>
      </div>
    </div>
  );
}
