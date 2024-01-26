import { SelectTypeProps } from "@/types/types";
import { typeList } from "@/utils/dictionaries";
import {
    Avatar,
    Select,
    SelectItem,
    SelectedItemProps,
} from "@nextui-org/react";

const SelectType: React.FC<SelectTypeProps> = ({
    selectedType,
    setSelectedType,
    disabled,
}) => {
    const handleSelectionChange = (e: any) => {
        console.log(e.target.value);
        setSelectedType(e.target.value);
    };

    console.log(selectedType);
    return (
        <div className=" flex-col  justify-center my-4 mx-4">
            <Select
                isDisabled={disabled}
                items={typeList}
                label="Type: "
                labelPlacement="outside-left"
                defaultSelectedKeys={[selectedType ?? "all"]}
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
                onChange={handleSelectionChange}
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
