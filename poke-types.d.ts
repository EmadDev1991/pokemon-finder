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