 type Pokemon = {
    name:string,
    url:string
}


interface pokemonListData {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[]; 
}


interface PokemonStat {
    base_stat: number;
    name: string;
    stat: any
}




interface PokemonFullDetails{
        id: number
        name: string,
        height: number,
        weight: number,
        abilities:any ,
        imageUrl: string,
        exp: number,
        types: string[] ,
        stats: PokemonStat[],
}