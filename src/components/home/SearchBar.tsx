import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Pokemon } from "@prisma/client";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/filters";

export function SearchBar(props: any) {
    const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
    const {
        setSelectedPokemon,
        pageParams,
        selectedType,
        selectedRegion,
        page,
        selectedPokemon,
    } = props;
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`/api/prueba`);
            setAllPokemons(data.data);
        }
        fetchData();
    }, []);

    // const onSelectionChange = (name: any) => {
    //     // setSelectedPokemon(name);
    //     router.push(
    //         `/?region=${selectedRegion}&type=${selectedType}&page=${page}&search=${name.toLowerCase()}`
    //     );
    // };

    const onClear = () => {
        setSelectedPokemon(null);
    };

    return (
        <div className="bg-black ">
            <div className="flex justify-center ">
                <Autocomplete
                    defaultInputValue={
                        selectedPokemon?.length > 0
                            ? capitalizeFirstLetter(selectedPokemon)
                            : ""
                    }
                    defaultItems={allPokemons}
                    startContent={
                        <IoIosSearch size={50} className="text-gray-50" />
                    }
                    placeholder="Search all Pokémon"
                    className="max-w-xs  my-8 text-white"
                    size="lg"
                    variant="bordered"
                    color="secondary"
                    isLoading={allPokemons?.length ? false : true}
                    aria-label="Search all Pokémon"
                    allowsCustomValue={true}
                    onSelectionChange={(name: any) => {
                        console.log(name);
                        if (name !== null) {
                            router.push(
                                `/?region=${selectedRegion}&type=${selectedType}&page=${page}&search=${name?.toLowerCase()}`
                            ),
                                { scroll: false };
                        } else {
                            // router.push(
                            //     `/?region=${selectedRegion}&type=${selectedType}&page=${page}`
                            // ),
                            //     { scroll: false };
                            router.back();
                        }
                    }}
                    onKeyDown={(e: any) => {
                        e.continuePropagation();
                    }}
                    clearButtonProps={{
                        className: "sm:text-white",
                        onClick: () => {
                            onClear;
                            router.push(
                                `/?region=${selectedRegion}&type=${selectedType}&page=${pageParams}`,
                                { scroll: false }
                            );
                            // router.back();
                        },
                    }}
                >
                    {allPokemons.map((pokemon) => (
                        <AutocompleteItem
                            className="text-white"
                            key={pokemon.name}
                            textValue={pokemon.name}
                        >
                            <div className="flex gap-2 items-center">
                                {/* <Avatar
                                    alt={pokemon.name}
                                    className="flex-shrink-0"
                                    size="sm"
                                    src={pokemon.image}
                                /> */}

                                {pokemon.name}
                            </div>
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
            </div>
        </div>
    );
}
export default SearchBar;
