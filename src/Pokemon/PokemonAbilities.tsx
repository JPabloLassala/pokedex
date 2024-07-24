import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pokemon } from "../Schemas";
import { Badge } from "../Shared";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export function PokemonAbilities({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      {pokemon.abilities.map((ability) => {
        const isHidden = ability.is_hidden;
        const bgClass = isHidden ? "bg-hiddenAbility" : "bg-ability";
        const borderClass = isHidden ? "border-hiddenAbilityBorder" : "border-abilityBorder";

        return (
          <Badge
            key={ability.ability.name}
            bgColor={bgClass}
            textColor="text-slate-800"
            className={`px-6 py-2 break-keep uppercase border rounded-full min-w-36 flex flex-row justify-between items-center ${borderClass}`}
          >
            <p className="text-lg">{ability.ability.name}</p>
            {isHidden && (
              <div>
                <FontAwesomeIcon icon={faEyeSlash} className="ml-1" />
              </div>
            )}
          </Badge>
        );
      })}
    </>
  );
}
