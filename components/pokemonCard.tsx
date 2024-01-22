import { cn } from "@/lib/utils";
import Link from "next/link";

import ImageWithFallback from "./imageWithFallback";
import { getPokemonDetails } from "@/actions/pokemon";

interface PokemonCardProps {
  name: string;
}

const PokemonCard = async ({ name }: PokemonCardProps) => {

    const pokemonDetails = await getPokemonDetails(name)

    console.log(pokemonDetails)

  return (
    <Link    href={`/${pokemonDetails.id}`} className=" rounded-lg bg-muted col-span-12 py-4 sm:col-span-6 md:col-span-4 lg:col-span-3  flex flex-col items-center gap-4">
    <div className="w-full p-8" >
      <div  className="relative w-full aspect-square ">
          <ImageWithFallback  src={pokemonDetails.imageUrl} fill alt={name}/>
      </div>
    </div>
    <h2  className={cn("text-2xl font-semibold")} >{name}</h2>
  </Link>
  );
};

export default PokemonCard;
