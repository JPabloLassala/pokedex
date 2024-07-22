import { Container, PokeballSvg } from "../Shared";

export function PokemonSearch() {
  return (
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
  );
}
