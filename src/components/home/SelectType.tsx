import { SelectTypeProps } from "@/types/types";
import { typeList } from "@/utils/dictionaries";
import {
    Avatar,
    Select,
    SelectItem,
    SelectedItemProps,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const SelectType: React.FC<SelectTypeProps> = ({
    selectedType,
    setSelectedType,
    setPage,
    disabled,
    selectedRegion,
}) => {
    const router = useRouter();
    // const handleSelectionChange = (e: any) => {
    //     setSelectedType(e.target.value);
    //     setPage(1);
    // };

    return (
        <div className=" flex-col  justify-center my-4 mx-2 sm:mx-4">
            <Select
                isDisabled={disabled}
                items={typeList}
                label="Type: "
                labelPlacement="outside-left"
                selectedKeys={[selectedType]}
                // defaultSelectedKeys={[
                //     selectedType?.length > 0 && selectedType !== "all"
                //         ? selectedType
                //         : "all",
                // ]}
                renderValue={(items) => {
                    return items.map((item) => {
                        return !selectedType ? (
                            "all"
                        ) : (
                            <div
                                className="flex gap-2 items-center"
                                key={item.key}
                            >
                                <Avatar
                                    alt={item.textValue}
                                    className="flex-shrink-0"
                                    size="sm"
                                    src={
                                        typeList.find(
                                            (type) => type.value === item.key
                                        )?.image
                                    }
                                />

                                {item.textValue}
                            </div>
                        );
                    });
                }}
                className="min-w-[190px] flex justify-center items-center"
                onChange={(e) => {
                    router.push(
                        `/?region=${selectedRegion}&type=${e.target.value}&page=1`
                    ),
                        { scroll: false };
                    setSelectedType(e.target.value);
                }}
                scrollShadowProps={{ isEnabled: false }}
            >
                {typeList.map((type) => (
                    <SelectItem
                        key={type.value}
                        textValue={type.label}
                        value={type.image}
                    >
                        <div className="flex gap-2 items-center">
                            <Avatar
                                alt={type.label}
                                className="flex-shrink-0"
                                size="sm"
                                src={type.image}
                            />

                            {type.label}
                        </div>
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
};

export default SelectType;
