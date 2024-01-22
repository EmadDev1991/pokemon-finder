"use server"



/// get Pokemon's Names
export const getPokemonNames = async (page: number, limit: number) => {
    try {
        const res: Response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=${limit}`)
        const data: pokemonListData = await res.json()

        const results: Pokemon[] = data.results;
        return results

    } catch (err) {
        console.log('some thing wend wrong')
    }

} 




/// get pokemon specific details
export const getPokemonDetails = async (pokemonName: string) => {
    const pokemonRequest:Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    const pokemonData = await pokemonRequest.json()
    
    /// get stats 
    const stats = pokemonData.stats.map((stat:PokemonStat) => {
        return {
          base_stat: stat.base_stat,
          name: stat.stat.name
        };
      });


    /// get types as an array of strings
    const types =  pokemonData.types.map((type:any)=> type.type.name)


    const details:PokemonFullDetails = {
        id: pokemonData.id,
        name: pokemonData.name,
        height: pokemonData.height,
        weight: pokemonData.weight,
        abilities: pokemonData.abilities,
        imageUrl: pokemonData.sprites.other.dream_world.front_default,
        exp: pokemonData.base_experience,
        types: types,
        stats: stats,
}
    return details
}
