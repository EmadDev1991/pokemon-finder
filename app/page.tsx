import PokemonList from "@/components/pokemonList";

type SearchParams = {
  page: string | undefined;
  limit: string | undefined;
};

interface Props {
  searchParams: SearchParams;
}

const Home = ({ searchParams }: Props) => {
  const { page, limit } = searchParams;

  return (
    <main className=" h-full">
      <PokemonList page={page} limit={limit} />
    </main>
  );
};

export default Home;
