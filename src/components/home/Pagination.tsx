import { Pagination as PaginationNextUi } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface PaginationProps {
    // key: string | number;
    page: number;
    setPage: (value: number) => void;
    pokemon: any;
    selectedRegion?: string;
    selectedType?: string;
    setDisplayedPokemon?: (value: any) => void;
    pageParams?: any;
}
const Pagination: React.FC<PaginationProps> = ({
    page,
    setPage,
    pokemon,
    selectedRegion,
    selectedType,
    pageParams,
}) => {
    // function changePage(page: number) {
    //     setPage(page);
    // }

    const router = useRouter();
    return (
        <div className="flex justify-center sm:mx-2 my-4 ">
            {pokemon?.length !== 0 ? (
                <PaginationNextUi
                    showControls
                    color="secondary"
                    total={
                        pokemon?.length !== 0
                            ? Math.ceil(pokemon?.length / 12)
                            : page // Consulto length de pokemon por bug de initialPage
                    }
                    onChange={(p) => {
                        console.log(selectedRegion, selectedType, p);
                        router.push(
                            `/?region=${selectedRegion}&type=${selectedType}&page=${p}`,
                            { scroll: false }
                        );
                    }}
                    initialPage={page}
                    page={page}
                    classNames={{
                        wrapper: "",
                        item: "max-[380px]:max-w-[20px] min-w-[20px] sm:min-w-none",
                        cursor: "max-[380px]:max-w-[20px] sm:max-w-none",
                    }}
                />
            ) : (
                <PaginationNextUi color="secondary" total={1} showControls />
            )}
        </div>
    );
};

export default Pagination;
