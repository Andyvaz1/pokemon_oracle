import { Pagination as PaginationNextUi } from "@nextui-org/react";
interface PaginationProps {
    // key: string | number;
    page: number;
    setPage: (value: number) => void;
    pokemon: any;
}
const Pagination: React.FC<PaginationProps> = ({ page, setPage, pokemon }) => {
    function changePage(page: number) {
        setPage(page);
    }
    return (
        <div className="flex justify-center mx-2 my-4">
            <PaginationNextUi
                showControls
                color="secondary"
                total={
                    pokemon?.length !== 0 ? Math.ceil(pokemon?.length / 12) : 1 // Consulto length de pokemon por bug de initialPage
                }
                onChange={(p) => changePage(p)}
                initialPage={1}
                page={page}
            />
        </div>
    );
};

export default Pagination;
