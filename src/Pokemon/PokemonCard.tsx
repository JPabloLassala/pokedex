import _ from "lodash";
import { Pokemon } from "../Schemas";
import { Badge, Container } from "../Shared";
import { TypeColor } from "../Constants/TypeColor";

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

  console.log(pokemon.types[0].type.url);

  return (
    <div
      className="flex flex-col items-center justify-center min-w-40 h-52 hover:cursor-pointer"
      onClick={onSelectPokemon}
    >
      <div className="h-[40px] z-10">
        <div className="flex flex-col items-center justify-center h-[80px] max-h-[80px] aspect-square">
          <img src={img} alt={pokemon.name} className="aspect-auto" />
        </div>
      </div>
      <Container className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-sm font-bold text-gray-500">&#8470; {pokemon.id}</p>
        <p className="font-bold">{_.capitalize(pokemon.name)}</p>
        <div className="w-full flex flex-row justify-center items-center gap-2">
          {pokemon.types.map((type) => (
            <Badge
              key={type.type.name}
              label={type.type.name.toUpperCase()}
              bgColor={TypeColor[type.type.name].bg}
              textColor={TypeColor[type.type.name].text}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
