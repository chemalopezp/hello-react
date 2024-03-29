import React from "react";
import { createRoot } from "react-dom/client";
import PokemonList from "./pokemons/pokemon-list";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<PokemonList />);
