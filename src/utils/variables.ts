export const urlTypes = "https://pokeapi.co/api/v2/type";
export const urlPokemon = "https://pokeapi.co/api/v2/pokemon";

export function wordToNumber(word: string): number {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowercaseWord = word.toLowerCase();
    let result = 0;

    for (let i = 0; i < lowercaseWord.length; i++) {
        const char = lowercaseWord[i];
        const position = alphabet.indexOf(char) + 1; // Adding 1 because the position is 1-based
        result += position;
    }

    return result;
}
