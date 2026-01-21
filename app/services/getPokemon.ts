import { SimplePokemon } from "../dashboard/pokemons/types/pokemon";
import { PokemonResponse } from "../dashboard/pokemons/types/pokemon.api";

export const getPokemons = async (
  limit = 20,
  offset = 0,
): Promise<SimplePokemon[]> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );

  const data = (await res.json()) as PokemonResponse;

  const pokemons = data.results.map((pokemon) => {
    return {
      id: pokemon.url.split("/").at(-2) || "",
      name: pokemon.name,
    };
  });

  // throw new Error("Este error no deberia de aparecer");
  return pokemons;
};
