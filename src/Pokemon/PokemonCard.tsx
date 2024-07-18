import _ from "lodash";
import { Pokemon } from "../Schemas";
import { Badge } from "../Shared/Badge";
import { TypeColor } from "../Constants/TypeColor";

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="w-60 divide-x border border-slate-300 rounded-md shadow bg-gradient-to-br from-slate-200 to-white">
      <div className="flex flex-row justify-center items-center transition-transform hover:scale-110 hover:cursor-pointer">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className="pl-2 flex flex-col justify-start">
          <p className="font-body text-lg font-bold">{_.capitalize(pokemon.name)}</p>
          <div className="flex flex-row gap-1">
            {pokemon.types.map((type) => {
              const bgColor = TypeColor[type.type.name].bg;
              const textColor = TypeColor[type.type.name].text;
              return (
                <Badge
                  key={type.slot}
                  label={_.capitalize(type.type.name)}
                  bgColor={bgColor}
                  textColor={textColor}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
