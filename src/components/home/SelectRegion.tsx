"use client";
import { SelectRegionProps } from "@/types/types";
import { regionsList } from "@/utils/dictionaries";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

const SelectRegion: React.FC<SelectRegionProps> = ({
    selectedRegion,
    setSelectedRegion,
    disabled,
}) => {
    const [value, setValue] = useState("kanto");

    const handleSelectionChange = (e: any) => {
        setSelectedRegion(e.target.value);
    };
    console.log(selectedRegion);

    return (
        <div className=" flex-col justify-center my-4  mx-4">
            <Select
                isDisabled={disabled}
                label="Region:"
                labelPlacement="outside-left"
                selectedKeys={[selectedRegion ?? "kanto"]}
                className="max-w-[180px] min-w-[160px] flex justify-center items-center"
                onChange={handleSelectionChange}
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
