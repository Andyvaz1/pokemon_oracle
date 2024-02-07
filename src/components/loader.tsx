import { Spinner } from "@nextui-org/react";

const Loader: React.FC = () => {
    return (
        <div className="grid place-content-center align-items-center  min-h-[90vh]">
            <Spinner color="secondary" size="lg"></Spinner>
        </div>
    );
};

export default Loader;
