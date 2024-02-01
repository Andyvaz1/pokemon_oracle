import { SelectFiltersProps } from "@/types/types";
import SelectRegion from "./SelectRegion";
import SelectType from "./SelectType";

const SelectFilters: React.FC<SelectFiltersProps> = ({
    selectedRegion,
    setSelectedRegion,
    selectedType,
    setSelectedType,
    setPage,
    disabled,
}) => {
    return (
        <div className="flex justify-center ">
            <SelectRegion
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                selectedType={selectedType}
                disabled={disabled}
                setPage={setPage}
            />
            <SelectType
                setSelectedType={setSelectedType}
                selectedType={selectedType}
                selectedRegion={selectedRegion}
                disabled={disabled}
                setPage={setPage}
            />
        </div>
    );
};

export default SelectFilters;
