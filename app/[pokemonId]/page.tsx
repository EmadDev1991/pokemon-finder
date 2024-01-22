import { getPokemonDetails } from "@/actions/pokemon";
import BackButton from "@/components/backButton";
import EvolutionChain from "@/components/evolutionChain";
import ImageWithFallback from "@/components/imageWithFallback";
import StatsTable from "@/components/statsTable";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PokemonDetailsPage = async ({
  params,
}: {
  params: { pokemonId: string };
}) => {
  const { pokemonId } = params;
  const details: PokemonFullDetails = await getPokemonDetails(pokemonId);

  return (
    <div>
      <BackButton />

      <div className="wrapper m-auto grid grid-cols-12 gap-6 pt-10">
        <div className="col-span-12 md:col-span-6   h-96 relative p-10  bg-accent  rounded-md ">
          <ImageWithFallback
            alt={details.name}
            src={details.imageUrl}
            className="w-full h-full"
            width={100}
            height={100}
          />
        </div>

        <div className="col-span-12 md:col-span-6  flex flex-col gap-4 justify-start items-start">
          <h2 className="text-xl font-bold">Pokemon Details</h2>
          <div className="flex  items-center gap-4">
            {details.types.map((type: any) => (
              <Badge key={type} variant={type}>{type}</Badge>
            ))}
          </div>

          <StatsTable details={details} />
        </div>
        <div className="col-span-12 flex flex-col gap-6">
          <h2 className="text-xl font-bold col-span-12 pt-12">
            Evolution Chain
          </h2>
          <div>
            <EvolutionChain id={details.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsPage;
