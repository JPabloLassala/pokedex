import { TypeColor } from "../Constants/TypeColor";
import { Pokemon } from "../Schemas";
import { Badge } from "../Shared";

export function PokemonTypes({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      {pokemon.types.map((type) => (
        <Badge
          key={type.type.name}
          bgColor={TypeColor[type.type.name].bg}
          textColor={TypeColor[type.type.name].text}
          className="uppercase rounded-md px-2"
        >
          {type.type.name}
        </Badge>
      ))}
    </>
  );
}
