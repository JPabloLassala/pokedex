import { Link } from "react-router-dom";
import { PokeballSvg } from "./PokeballSvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./Container";

export function Navbar() {
  return (
    <Container element="nav" className="flex flex-row w-full h-full justify-center items-center">
      <Link
        to="/pokedex/pokemon"
        className="mx-4 font-header font-bold text-lg flex flex-row items-center text-gray-500"
      >
        <PokeballSvg className="inline mr-2" />
        Pokemon
      </Link>
      <Link to="/pokedex/items" className="mx-4 font-header text-lg font-bold text-gray-500">
        <FontAwesomeIcon icon={faShapes} className="mr-2" />
        Items
      </Link>
    </Container>
  );
}
