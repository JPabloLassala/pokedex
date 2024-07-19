import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./Shared/RootLayout";
import { PokemonPage } from "./Pokemon";

const router = createBrowserRouter([
  {
    path: "/pokedex",
    element: <RootLayout />,
    children: [
      { index: true, element: <PokemonPage /> },
      { path: "pokemon", element: <PokemonPage /> },
      { path: "items", element: <p>items</p> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
