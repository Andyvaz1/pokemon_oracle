import { SelectRegionProps } from "@/types/types";
import { regionsList } from "@/utils/dictionaries";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const SelectRegion: React.FC<SelectRegionProps> = ({
    selectedRegion,
    selectedType,
    page,
    setSelectedRegion,
    setPage,
    disabled,
}) => {
    const router = useRouter();

    // const handleSelectionChange = (e: any) => {
    //     setSelectedRegion(e.target.value);
    //     setPage(1);
    // };

    return (
        <div className=" justify-center my-4  sm:mx-6">
            <Select
                isDisabled={disabled}
                label="Region:"
                labelPlacement="outside-left"
                selectedKeys={[selectedRegion]}
                className="sm:max-w-[180px] min-w-[160px] flex justify-center items-center"
                onChange={(e) => {
                    router.push(
                        `/?region=${e.target.value}&type=${selectedType}&page=1`
                    ),
                        { scroll: false };
                    setSelectedRegion(e.target.value);
                }}
                scrollShadowProps={{ isEnabled: false }}
            >
                {regionsList.map((region) => (
                    <SelectItem key={region.value} value={region.value}>
                        {region.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
};

export default SelectRegion;
