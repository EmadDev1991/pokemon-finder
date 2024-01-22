import React from "react";
import PokemonInfo from "./pokemonInfo";

const StatsTable = ({ details }: { details: PokemonFullDetails }) => {
  return (
    <div className="grid grid-cols-2 w-full gap-6">
      <div className="col-span-1  flex flex-col gap-4">
        <PokemonInfo name="Name" value={details.name} />
        <PokemonInfo name="Height" value={details.height} />
        <PokemonInfo name="Weight" value={details.weight} />
        <PokemonInfo name="XP" value={details.exp} />
        <div>
            <p className="font-bold">Abilities: </p>
            <div className="flex gap-3 flex-wrap">
              {details.abilities.map((ability: any) => (
                <p className="mt-3 bg-secondary px-4 py-2 rounded-md">{ability.ability.name}</p>
              ))}
            </div>
          </div>
      </div>
      <div className="col-span-1  flex flex-col gap-4">
        {details.stats.map((stat) => (
          <PokemonInfo name={stat.name} value={stat.base_stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsTable;

