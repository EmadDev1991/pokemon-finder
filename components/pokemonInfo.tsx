interface PokemonInfoProps {
  name: string;
  value: string | number;
}

const PokemonInfo = ({ name, value }: PokemonInfoProps) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <p className="font-bold">{name} :</p>
      <p>{value}</p>
    </div>
  );
};

export default PokemonInfo;
