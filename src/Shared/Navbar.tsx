import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex flex-row text-white justify-center items-center">
      <Link to="/pokedex/pokemon" className="mx-4 font-header text-xl">
        Pokemon
      </Link>
      <Link to="/pokedex/items" className="mx-4 font-header text-xl">
        Items
      </Link>
    </nav>
  );
}
