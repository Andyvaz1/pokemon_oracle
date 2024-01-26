import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
import { Pokemon } from "@prisma/client";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { useEffect, useState } from "react";

export function SearchBar(props: any) {
    const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
    const { selectedPokemon, setSelectedPokemon } = props;

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`/api/prueba`);
            setAllPokemons(data.data);
        }
        fetchData();
    }, []);

    const onSelectionChange = (name: any) => {
        setSelectedPokemon(name);
    };

    const onClear = () => {
        console.log("clear");
    };

    return (
        <div className="bg-black ">
            <div className="flex justify-center">
                <Autocomplete
                    defaultItems={allPokemons}
                    startContent={
                        <IoIosSearch size={50} className="text-gray-50" />
                    }
                    placeholder="Search Pokémon"
                    className="max-w-xs  my-8 text-white"
                    size="lg"
                    variant="bordered"
                    color="secondary"
                    isLoading={allPokemons?.length ? false : true}
                    aria-label="Search Pokémon"
                    allowsCustomValue={true}
                    onSelectionChange={onSelectionChange}
                    onKeyDown={(e: any) => {
                        e.continuePropagation();
                    }}
                >
                    {allPokemons.map((pokemon) => (
                        <AutocompleteItem
                            className="text-white"
                            key={pokemon.name}
                            textValue={pokemon.name}
                        >
                            {pokemon.name}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
            </div>
        </div>
    );
}
export default SearchBar;
