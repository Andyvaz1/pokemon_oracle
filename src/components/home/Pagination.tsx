import { Pagination as PaginationNextUi } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface PaginationProps {
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
    pokemon,
    selectedRegion,
    selectedType,
}) => {
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
                        router.push(
                            `/?region=${selectedRegion}&type=${selectedType}&page=${p}`,
                            { scroll: false }
                        );
                    }}
                    initialPage={page}
                    page={page}
                    classNames={{
                        wrapper: "",
                        item: "max-[380px]:max-w-[25px] max-[440px]:max-w-[28px] min-w-[25px] sm:min-w-none",
                        cursor: "max-[380px]:max-w-[25px] max-[440px]:max-w-[28px] min-w-[25px] sm:min-w-none",
                        next: "max-[380px]:max-w-[25px]  min-w-[25px] sm:min-w-none",
                        prev: "max-[380px]:max-w-[25px]  min-w-[25px] sm:min-w-none",
                    }}
                />
            ) : (
                <PaginationNextUi
                    classNames={{
                        wrapper: "",
                        item: "max-[380px]:max-w-[25px] max-[440px]:max-w-[28px]  min-w-[25px] sm:min-w-none",
                        cursor: "max-[380px]:max-w-[25px] max-[440px]:max-w-[28px] min-w-[25px] sm:min-w-none",
                        next: "max-[380px]:max-w-[25px]   min-w-[25px] sm:min-w-none",
                        prev: "max-[380px]:max-w-[25px]  min-w-[25px] sm:min-w-none",
                    }}
                    color="secondary"
                    total={1}
                    showControls
                />
            )}
        </div>
    );
};

export default Pagination;
