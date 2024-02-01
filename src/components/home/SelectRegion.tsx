"use client";
import { SelectRegionProps } from "@/types/types";
import { regionsList } from "@/utils/dictionaries";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SelectRegion: React.FC<SelectRegionProps> = ({
    selectedRegion,
    selectedType,
    page,
    setSelectedRegion,
    setPage,
    disabled,
}) => {
    const [value, setValue] = useState("kanto");
    const router = useRouter();

    // const handleSelectionChange = (e: any) => {
    //     setSelectedRegion(e.target.value);
    //     setPage(1);
    // };

    return (
        <div className=" flex-col justify-center my-4  mx-4">
            <Select
                isDisabled={disabled}
                label="Region:"
                labelPlacement="outside-left"
                selectedKeys={[selectedRegion]}
                className="max-w-[180px] min-w-[160px] flex justify-center items-center"
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
