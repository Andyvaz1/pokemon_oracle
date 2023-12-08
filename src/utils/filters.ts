export type Filter = (t: string, allPokemons: any[]) => number;

export function filterType(t: string, allPokemons: any[]) {
    if (t === "all") return allPokemons;
    let pokemonByType = allPokemons.filter((pokemon: any) => {
        return pokemon.types.find((type: any) => {
            return type.name === t;
        });
    });
    return pokemonByType;
}
