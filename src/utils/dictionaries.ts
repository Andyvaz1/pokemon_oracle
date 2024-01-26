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

export const regionsList: { label: string; value: string; key: number }[] = [
    {
        label: "Kanto",
        value: "kanto",
        key: 1,
    },
    {
        label: "Johto",
        value: "johto",
        key: 2,
    },
    {
        label: "Hoenn",
        value: "hoenn",
        key: 3,
    },
    {
        label: "Sinnoh",
        value: "sinnoh",
        key: 4,
    },
    {
        label: "Unova",
        value: "unova",
        key: 5,
    },
    {
        label: "Kalos",
        value: "kalos",
        key: 6,
    },
    {
        label: "Alola",
        value: "alola",
        key: 7,
    },
    {
        label: "Galar",
        value: "galar",
        key: 8,
    },
];
interface TypeImg {
    [key: string]: string;
}

export const typeList: {
    label: string;
    value: string;
    key: number;
    image: string;
}[] = [
    {
        label: "All",
        value: "all",
        key: 21,
        image: "https://www.freeiconspng.com/uploads/file-pokeball-png-0.png",
    },
    {
        label: "Fighting",
        value: "fighting",
        key: 1,
        image: "https://archives.bulbagarden.net/media/upload/3/3b/Fighting_icon_SwSh.png",
    },
    {
        label: "Normal",
        value: "normal",
        key: 2,
        image: "https://archives.bulbagarden.net/media/upload/9/95/Normal_icon_SwSh.png",
    },
    {
        label: "Flying",
        value: "flying",
        key: 3,
        image: "https://archives.bulbagarden.net/media/upload/b/b5/Flying_icon_SwSh.png",
    },
    {
        label: "Poison",
        value: "poison",
        key: 4,
        image: "https://archives.bulbagarden.net/media/upload/8/8d/Poison_icon_SwSh.png",
    },
    {
        label: "Ground",
        value: "ground",
        key: 5,
        image: "https://archives.bulbagarden.net/media/upload/2/27/Ground_icon_SwSh.png",
    },
    {
        label: "Rock",
        value: "rock",
        key: 6,
        image: "https://archives.bulbagarden.net/media/upload/1/11/Rock_icon_SwSh.png",
    },
    {
        label: "Bug",
        value: "bug",
        key: 7,
        image: "https://archives.bulbagarden.net/media/upload/9/9c/Bug_icon_SwSh.png",
    },
    {
        label: "Ghost",
        value: "ghost",
        key: 8,
        image: "https://archives.bulbagarden.net/media/upload/0/01/Ghost_icon_SwSh.png",
    },
    {
        label: "Steel",
        value: "steel",
        key: 9,
        image: "https://archives.bulbagarden.net/media/upload/0/09/Steel_icon_SwSh.png",
    },
    {
        label: "Fire",
        value: "fire",
        key: 10,
        image: "https://archives.bulbagarden.net/media/upload/a/ab/Fire_icon_SwSh.png",
    },
    {
        label: "Water",
        value: "water",
        key: 11,
        image: "https://archives.bulbagarden.net/media/upload/8/80/Water_icon_SwSh.png",
    },
    {
        label: "Grass",
        value: "grass",
        key: 12,
        image: "https://archives.bulbagarden.net/media/upload/a/a8/Grass_icon_SwSh.png",
    },
    {
        label: "Electric",
        value: "electric",
        key: 13,
        image: "https://archives.bulbagarden.net/media/upload/7/7b/Electric_icon_SwSh.png",
    },
    {
        label: "Psychic",
        value: "psychic",
        key: 14,
        image: "https://archives.bulbagarden.net/media/upload/7/73/Psychic_icon_SwSh.png",
    },
    {
        label: "Ice",
        value: "ice",
        key: 15,
        image: "https://archives.bulbagarden.net/media/upload/1/15/Ice_icon_SwSh.png",
    },
    {
        label: "Dragon",
        value: "dragon",
        key: 16,
        image: "https://archives.bulbagarden.net/media/upload/7/70/Dragon_icon_SwSh.png",
    },
    {
        label: "Dark",
        value: "dark",
        key: 17,
        image: "https://archives.bulbagarden.net/media/upload/d/d5/Dark_icon_SwSh.png",
    },
    {
        label: "Fairy",
        value: "fairy",
        key: 18,
        image: "https://archives.bulbagarden.net/media/upload/c/c6/Fairy_icon_SwSh.png",
    },
];

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
