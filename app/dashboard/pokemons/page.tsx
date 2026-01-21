import { getPokemons } from "@/app/services/getPokemon";
import { PokemonsGrid } from "./components/pokemons.grid";

export default async function PokemonsPage() {
  const pokemons = await getPokemons(150);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>estatico</small>
      </span>

      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
