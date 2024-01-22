"use server"



/// get Pokemon's Names
export const getPokemonNames = async (page: number, limit: number) => {
    try {
        const res: Response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=${limit}`)
        const data: pokemonListData = await res.json()

        const results: Pokemon[] = data.results;

        if (!results) return { error: "something went wrong" }

        return results
    } catch (err) {
        return { error: "something went wrong" }
    }

} 