import _ from "lodash";
import { Pokemon } from "../Schemas";
import { Container, P } from "../Shared";
import { PokemonTypes } from "./PokemonTypes";

export function PokemonCard({
  pokemon,
  onSelectPokemon,
}: {
  pokemon: Pokemon;
  onSelectPokemon: () => void;
}) {
  const img =
    pokemon.sprites.versions?.["generation-v"]["black-white"].animated?.front_default ||
    pokemon.sprites.front_default;

  return (
    <div
      className="flex flex-col items-center justify-center w-48 h-52 hover:cursor-pointer"
      onClick={onSelectPokemon}
    >
      <div className="h-[40px] z-10">
        <div className="flex flex-col items-center justify-center h-[80px] max-h-[80px] aspect-square">
          <img src={img} alt={pokemon.name} className="aspect-auto" />
        </div>
      </div>
      <Container className="w-full h-full flex flex-col items-center justify-center">
        <P bold gray size="sm">
          &#8470; {pokemon.id}
        </P>
        <P bold className="capitalize">
          {pokemon.name}
        </P>
        <div className="w-full flex flex-row justify-center items-center gap-2">
          <PokemonTypes pokemon={pokemon} />
        </div>
      </Container>
    </div>
  );
}
