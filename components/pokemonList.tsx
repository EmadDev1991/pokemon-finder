import { getPokemonNames } from "@/actions/pokemon";
import PokemonCard from "./pokemonCard";
import { Suspense } from "react";
import CardSkeleton from "./shared/cardSkeleton";
import PaginationButtons from "./paginationButtons";

interface PokemonListProps {
  page: string | number | undefined;
  limit: string | number | undefined;
}

const PokemonList = async ({ page = 1, limit = 12 }: PokemonListProps) => {
  let pageNumber = Number(page);
  let limitNumber = Number(limit);

  const pokemonList = (await getPokemonNames(pageNumber, limitNumber)) || [];



  return (
    <div className="wrapper m-auto pt-28">
      <PaginationButtons pageNumber={pageNumber} limitNumber={limitNumber} />
      <div className="grid grid-cols-12 gap-8">
        {pokemonList.map((pokemon) => (
          <Suspense fallback={<CardSkeleton/>}>
            <PokemonCard name={pokemon.name} />
          </Suspense>
        ))}
      </div>
      
    </div>
  );
};

export default PokemonList;
