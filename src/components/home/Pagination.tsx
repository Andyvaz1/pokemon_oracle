import { Pagination as PaginationNextUi } from "@nextui-org/react";
interface PaginationProps {
    // key: string | number;
    page: number;
    setPage: (value: number) => void;
    pokemon: any;
}
const Pagination: React.FC<PaginationProps> = ({ setPage, pokemon }) => {
    function changePage(page: number) {
        setPage(page);
    }
    return (
        <div className="flex justify-center mx-2 my-4">
            <PaginationNextUi
                showControls
                total={Math.round(pokemon.length / 12)}
                initialPage={1}
                color="secondary"
                onChange={(page) => changePage(page)}
            />
        </div>
    );
};

export default Pagination;
