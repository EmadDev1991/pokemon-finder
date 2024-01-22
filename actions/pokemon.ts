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






export const getEvolutionChain = async(id:string)=>{
    // to get evolution chain url we need to fetch pokemon Species first
    // make second fetch request to get evolution chain data

    const pokemonSpeciesRequest:Response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`) 
    const pokemonSpeciesData = await pokemonSpeciesRequest.json()

    const evolutionChainUrl = pokemonSpeciesData.evolution_chain.url

    const pokemonEvolutionChainRequest:Response  = await fetch(evolutionChainUrl)
    const pokemonEvolutionChainData = await pokemonEvolutionChainRequest.json()

    const result:string[] = [];

    result.push(pokemonEvolutionChainData.chain.species.name)

    if (pokemonEvolutionChainData.chain.evolves_to && pokemonEvolutionChainData.chain.evolves_to.length > 0) {
        pokemonEvolutionChainData.chain.evolves_to.forEach((evolution:any) => {
            result.push(evolution.species.name)
            if (evolution.evolves_to) {
                evolution.evolves_to.forEach((evo:any)=>{
                    result.push(evo.species.name)
                })
                

            }
        });
    }

    return result
}

