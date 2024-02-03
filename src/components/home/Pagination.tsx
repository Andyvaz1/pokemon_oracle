import { Pagination as PaginationNextUi } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import sekeletons from "../skeletons";
interface PaginationProps {
    // key: string | number;
    page: number;
    setPage: (value: number) => void;
    pokemon: any;
    selectedRegion?: string;
    selectedType?: string;
    setDisplayedPokemon: (value: any) => void;
    pageParams?: any;
}
const Pagination: React.FC<PaginationProps> = ({
    page,
    setPage,
    pokemon,
    selectedRegion,
    selectedType,
    setDisplayedPokemon,
}) => {
    function changePage(page: number) {
        setPage(page);
    }

    const router = useRouter();
    return (
        <div className="flex justify-center sm:mx-2 my-4 ">
            <PaginationNextUi
                showControls
                color="secondary"
                total={
                    pokemon?.length !== 0 ? Math.ceil(pokemon?.length / 12) : 1 // Consulto length de pokemon por bug de initialPage
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
                    item: " min-w-[20px] sm:min-w-none",
                    // cursor: "max-w-[10%] sm:max-w-none",
                }}
            />
        </div>
    );
};

export default Pagination;
