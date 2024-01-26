import { SelectFiltersProps } from "@/types/types";
import SelectRegion from "./SelectRegion";
import SelectType from "./SelectType";

const SelectFilters: React.FC<SelectFiltersProps> = ({
    selectedRegion,
    setSelectedRegion,
    selectedType,
    setSelectedType,
    disabled,
}) => {
    return (
        <div className="flex justify-center ">
            <SelectRegion
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                disabled={disabled}
            />
            <SelectType
                setSelectedType={setSelectedType}
                selectedType={selectedType}
                disabled={disabled}
            />
        </div>
    );
};

export default SelectFilters;
