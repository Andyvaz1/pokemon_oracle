
import { Pokemon, PrismaClient, Type } from "@prisma/client";
const prisma = new PrismaClient()
import axios from "axios";

const urlTypes = "https://pokeapi.co/api/v2/type";
const urlPokemons = "https://pokeapi.co/api/v2/pokemon?limit=20"

//////


 export async function main() {
    const responseApi = await axios.get(urlTypes);
    const typesApi = responseApi.data.results;


    const types = typesApi.map(async(type: any)=>{
        await prisma.type.create({data: {
            
            name: type.name
        }})
    })
    console.log(types)
}


// main().catch(e=>{
//     console.error(e.mesage)
// }).finally(async()=>{
//     await prisma.$disconnect()
// })

export async function consulta() {
    const respuesta = await prisma.pokemon.findMany();

    console.log(respuesta)
}

export async function cargarImg(){
    const respuesta = await prisma.type.update({
        where: {
            name : "shadow"
        }, data:{
            image: "https://cdn.pixabay.com/photo/2018/05/18/15/43/pokemon-3411387_1280.png"
        }
        
    });

    console.log(respuesta)
}

export async function cargarPkm(){
    const responseApi = await axios.get(urlPokemons);
    const apiPokemons = responseApi.data.results;
    const resPokemons = await Promise.all(
        apiPokemons?.map(async (pokemon : any) => {
            const info = await axios.get(pokemon.url);
            return {
                id: info.data.id,
                name: info.data.name,
                types: info.data.types.map((t: any) => {
                    return {name: t.type.name}
                }),
                image: info.data.sprites.other["official-artwork"]
                    .front_default,

                    height : info.data.height,
                    Weight : info.data.weight
            };
        })
    );

    const createPokemons = resPokemons?.map(async(pokemon)=>{
        // const typeAr = pokemon.types.map((type: any)=>{
        //    return  {name: type}
        // })
        await prisma.pokemon.create(
            {data : {
            name: pokemon.name,
            Weight: pokemon.Weight,
            height: pokemon.height,
            image: pokemon.image,
            types: {
                connect: pokemon.types // sets userId of Profile record
              },
        }})
    })
    const finalResponse = await prisma.pokemon.findMany({include:{types: true}});
    console.log(finalResponse)
}

// consulta().catch(e=>{
//     console.error(e.mesage)
// })
