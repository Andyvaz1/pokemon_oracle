import { image } from "@nextui-org/react";

export const typeImgList = [
    {
        name: "fighting",
        image: "https://archives.bulbagarden.net/media/upload/3/3b/Fighting_icon_SwSh.png",
    },
    {
        name: "normal",
        image: "https://archives.bulbagarden.net/media/upload/9/95/Normal_icon_SwSh.png",
    },
    {
        name: "flying",
        image: "https://archives.bulbagarden.net/media/upload/b/b5/Flying_icon_SwSh.png",
    },
    {
        name: "poison",
        image: "https://archives.bulbagarden.net/media/upload/8/8d/Poison_icon_SwSh.png",
    },
    {
        name: "ground",
        image: "https://archives.bulbagarden.net/media/upload/2/27/Ground_icon_SwSh.png",
    },
    {
        name: "rock",
        image: "https://archives.bulbagarden.net/media/upload/1/11/Rock_icon_SwSh.png",
    },
    {
        name: "bug",
        image: "https://archives.bulbagarden.net/media/upload/9/9c/Bug_icon_SwSh.png",
    },
    {
        name: "ghost",
        image: "https://archives.bulbagarden.net/media/upload/0/01/Ghost_icon_SwSh.png",
    },
    {
        name: "steel",
        image: "https://archives.bulbagarden.net/media/upload/0/09/Steel_icon_SwSh.png",
    },
    {
        name: "fire",
        image: "https://archives.bulbagarden.net/media/upload/a/ab/Fire_icon_SwSh.png",
    },
    {
        name: "water",
        image: "https://archives.bulbagarden.net/media/upload/8/80/Water_icon_SwSh.png",
    },
    {
        name: "grass",
        image: "https://archives.bulbagarden.net/media/upload/a/a8/Grass_icon_SwSh.png",
    },
    {
        name: "electric",
        image: "https://archives.bulbagarden.net/media/upload/7/7b/Electric_icon_SwSh.png",
    },
    {
        name: "psychic",
        image: "https://archives.bulbagarden.net/media/upload/7/73/Psychic_icon_SwSh.png",
    },
    {
        name: "ice",
        image: "https://archives.bulbagarden.net/media/upload/1/15/Ice_icon_SwSh.png",
    },
    {
        name: "dragon",
        image: "https://archives.bulbagarden.net/media/upload/7/70/Dragon_icon_SwSh.png",
    },
    {
        name: "dark",
        image: "https://archives.bulbagarden.net/media/upload/d/d5/Dark_icon_SwSh.png",
    },
    {
        name: "fairy",
        image: "https://archives.bulbagarden.net/media/upload/c/c6/Fairy_icon_SwSh.png",
    },
    {
        name: "unknown",
        image: "https://w7.pngwing.com/pngs/115/437/png-transparent-pokemon-heartgold-and-soulsilver-unown-pokedex-missingno-unown-number-question-pokemon.png",
    },
    {
        name: "shadow",
        image: "https://cdn.pixabay.com/photo/2018/05/18/15/43/pokemon-3411387_1280.png",
    },
    { name: "all", image: "none" },
];

export const regions: Record<string, { offSet: number; limit: number }> = {
    kanto: { offSet: 0, limit: 151 },
    johto: { offSet: 151, limit: 100 },
    hoenn: { offSet: 251, limit: 135 },
    sinnoh: { offSet: 386, limit: 107 },
    unova: { offSet: 493, limit: 156 },
    kalos: { offSet: 649, limit: 72 },
    alola: { offSet: 721, limit: 88 },
    galar: { offSet: 809, limit: 89 },
    all: { offSet: 0, limit: 898 },
};

interface TypeImg {
    [key: string]: string;
}

export const typeImg: TypeImg = {
    fighting:
        "https://archives.bulbagarden.net/media/upload/3/3b/Fighting_icon_SwSh.png",
    normal: "https://archives.bulbagarden.net/media/upload/9/95/Normal_icon_SwSh.png",
    flying: "https://archives.bulbagarden.net/media/upload/b/b5/Flying_icon_SwSh.png",
    poison: "https://archives.bulbagarden.net/media/upload/8/8d/Poison_icon_SwSh.png",
    ground: "https://archives.bulbagarden.net/media/upload/2/27/Ground_icon_SwSh.png",
    rock: "https://archives.bulbagarden.net/media/upload/1/11/Rock_icon_SwSh.png",
    bug: "https://archives.bulbagarden.net/media/upload/9/9c/Bug_icon_SwSh.png",
    ghost: "https://archives.bulbagarden.net/media/upload/0/01/Ghost_icon_SwSh.png",
    steel: "https://archives.bulbagarden.net/media/upload/0/09/Steel_icon_SwSh.png",
    fire: "https://archives.bulbagarden.net/media/upload/a/ab/Fire_icon_SwSh.png",
    water: "https://archives.bulbagarden.net/media/upload/8/80/Water_icon_SwSh.png",
    grass: "https://archives.bulbagarden.net/media/upload/a/a8/Grass_icon_SwSh.png",
    electric:
        "https://archives.bulbagarden.net/media/upload/7/7b/Electric_icon_SwSh.png",
    psychic:
        "https://archives.bulbagarden.net/media/upload/7/73/Psychic_icon_SwSh.png",
    ice: "https://archives.bulbagarden.net/media/upload/1/15/Ice_icon_SwSh.png",
    dragon: "https://archives.bulbagarden.net/media/upload/7/70/Dragon_icon_SwSh.png",
    dark: "https://archives.bulbagarden.net/media/upload/d/d5/Dark_icon_SwSh.png",
    fairy: "https://archives.bulbagarden.net/media/upload/c/c6/Fairy_icon_SwSh.png",
    unknown:
        "https://w7.pngwing.com/pngs/115/437/png-transparent-pokemon-heartgold-and-soulsilver-unown-pokedex-missingno-unown-number-question-pokemon.png",
};
