import { SimplePokemon } from "@/app/dashboard/pokemons/types/pokemon";
import { PokemonCard } from "./pokemon.card";

interface Props {
  pokemons: SimplePokemon[];
}

export function PokemonsGrid({ pokemons }: Props) {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
