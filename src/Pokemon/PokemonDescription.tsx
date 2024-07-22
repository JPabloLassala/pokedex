import _ from "lodash";
import { Pokemon } from "../Schemas";
import { Container, Paragraph } from "../Shared";

export function PokemonDescription({ pokemon }: { pokemon?: Pokemon }) {
  const hiddenContainer = pokemon ? "w-1/3" : "w-0";
  const hiddenContents = pokemon ? "" : "w-0";

  return (
    <div className={`flex flex-col items-center ${hiddenContainer} transition-all duration-500`}>
      <div className={`h-[100px] z-10 ${hiddenContents}`}>
        <div className={`h-[200px] max-h-[200px] ${hiddenContents}`}>
          <img
            src={pokemon?.sprites.other?.["official-artwork"].front_default}
            className={`aspect-auto h-full ${hiddenContents}`}
          />
        </div>
      </div>
      <Container hidden={!pokemon} className="h-full w-full flex flex-col items-center pt-24">
        {pokemon && (
          <>
            <Paragraph bold gray size="sm">
              &#8470; {pokemon.id}
            </Paragraph>
            <Paragraph bold size="lg">
              {_.capitalize(pokemon.name)}
            </Paragraph>
            <Paragraph bold gray size="sm">
              asda
            </Paragraph>
          </>
        )}
      </Container>
    </div>
  );
}
