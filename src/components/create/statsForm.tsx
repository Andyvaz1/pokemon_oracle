import { Form } from "@/types/types";
import { typeList } from "@/utils/dictionaries";
import { Checkbox, Input } from "@nextui-org/react";
import React from "react";
import { GiBroadsword, GiHealthNormal } from "react-icons/gi";
import { GrShield } from "react-icons/gr";
import { IoSpeedometerOutline } from "react-icons/io5";

interface PokemonStatsProps {
    formData: Form;
    setFormData: (formData: Form) => void;
}

const PokemonStatsForm: React.FC<PokemonStatsProps> = ({
    formData,
    setFormData,
}) => {
    // const handleCheckboxChange = (
    //     event: React.ChangeEvent<HTMLInputElement>
    // ) => {
    //     const { name, checked } = event.target;

    //     setPokemonStats((prevStats) => {
    //         if (checked) {
    //             return {
    //                 ...prevStats,
    //                 types: [...prevStats.types, name],
    //             };
    //         } else {
    //             return {
    //                 ...prevStats,
    //                 types: prevStats.types.filter((type) => type !== name),
    //             };
    //         }
    //     });
    // };
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setFormData({ ...formData, name: event.target.value });
    };

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        event.preventDefault();
        if (event.target.checked) {
            setFormData({
                ...formData,
                types: [...formData.types, event.target.value],
            });
        } else {
            setFormData({
                ...formData,
                types: formData.types.filter(
                    (type) => type !== event.target.value
                ),
            });
        }
    };

    const handleStatsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <form className="space-y-2 font-semibold text-slate-500 ">
            <div>
                <label htmlFor="name" className="block mb-2 text-xl">
                    Name
                </label>
                <div className="md:grid md:grid-cols-3 ">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleNameChange}
                        className="border text-slate-400 bg-slate-900 border-purple-500 rounded-md px-2 py-1 col-start-2 "
                        maxLength={14}
                    />

                    <span
                        className={`${
                            formData.name.length === 0
                                ? "text-red-500"
                                : "text-green-500"
                        } text-sm flex justify-center  items-center md:justify-start ml-2`}
                    >
                        {formData.name.length === 0 ? "* Required" : "✓"}
                    </span>
                </div>
            </div>

            <div>
                <label className="block mb-2 text-xl">Types</label>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-4  justify-center items-center  ">
                    {typeList.map((type) => {
                        if (type.value === "all") {
                            return null;
                        } else
                            return (
                                <div
                                    key={type.value}
                                    className="flex justify-around "
                                >
                                    <Checkbox
                                        value={type.value}
                                        color="secondary"
                                        className="min-w-[110px] flex "
                                        classNames={{ label: "text-slate-500" }}
                                        isDisabled={
                                            formData.types.length > 1 &&
                                            !formData.types.includes(type.value)
                                                ? true
                                                : false
                                        }
                                        isSelected={formData.types.includes(
                                            type.value
                                        )}
                                        onChange={handleCheckboxChange}
                                    >
                                        {type.label}
                                    </Checkbox>
                                </div>
                            );
                    })}
                </div>
                <span
                    className={`${
                        formData.types.length === 0
                            ? "text-red-500"
                            : "text-green-500"
                    } text-sm flex justify-center  items-center  mt-2`}
                >
                    {formData.types.length === 0 ? "* Required (Max 2)" : "✓"}
                </span>
            </div>
            <label className="block text-xl">Stats</label>
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center  ">
                <div>
                    <Input
                        type="number"
                        id="hp"
                        name="hp"
                        label="HP"
                        placeholder={formData.hp + ""}
                        labelPlacement="outside"
                        onChange={handleStatsChange}
                        variant="bordered"
                        defaultValue={formData.hp + ""}
                        max={300}
                        isInvalid={formData.hp == 0 || formData.hp > 300}
                        className="w-24"
                        color="secondary"
                        startContent={
                            <div className="pointer-events-none flex items-center">
                                <GiHealthNormal />
                            </div>
                        }
                    />
                    {/* <label htmlFor="hp" className="block mb-2">
                        HP:
                    </label>
                    <input
                        type="number"
                        id="hp"
                        name="hp"
                        value={formData.hp}
                        min={1}
                        max={300}
                        step={10}
                        className="border bg-slate-900 border-purple-500 rounded-md px-2 py-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        onChange={handleStatsChange}
                    /> */}
                </div>

                <div>
                    {/* <label htmlFor="attack" className="block mb-2">
                        Attack:
                    </label> */}
                    <Input
                        type="number"
                        id="attack"
                        name="attack"
                        label="Attack"
                        placeholder={formData.attack + ""}
                        labelPlacement="outside"
                        onChange={handleStatsChange}
                        variant="bordered"
                        defaultValue={formData.attack + ""}
                        max={300}
                        isInvalid={
                            formData.attack == 0 || formData.attack > 300
                        }
                        className="w-24"
                        color="secondary"
                        startContent={
                            <div className="pointer-events-none flex items-center">
                                <GiBroadsword />
                            </div>
                        }
                    />
                    {/* <input
                        type="number"
                        id="attack"
                        name="attack"
                        value={formData.attack}
                        min={1}
                        max={300}
                        step={10}
                        className="border bg-slate-900 border-purple-500 rounded-md px-2 py-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        inputMode="numeric"
                        onChange={handleStatsChange}
                        maxLength={4}
                    /> */}
                </div>

                <div>
                    <Input
                        type="number"
                        id="defence"
                        name="defence"
                        label="Defence"
                        placeholder={formData.defence + ""}
                        labelPlacement="outside"
                        onChange={handleStatsChange}
                        variant="bordered"
                        defaultValue={formData.defence + ""}
                        max={300}
                        isInvalid={
                            formData.defence == 0 || formData.defence > 300
                        }
                        className="w-24"
                        color="secondary"
                        startContent={
                            <div className="pointer-events-none flex items-center">
                                <GrShield />
                            </div>
                        }
                    />
                    {/* <label htmlFor="defence" className="block mb-2">
                        Defence:
                    </label>
                    <input
                        type="number"
                        id="defence"
                        name="defence"
                        value={formData.defence}
                        min={1}
                        max={300}
                        step={10}
                        className="border bg-slate-900 border-purple-500 rounded-md px-2 py-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        onChange={handleStatsChange}
                    /> */}
                </div>

                <div>
                    <Input
                        type="number"
                        id="speed"
                        name="speed"
                        label="Speed"
                        placeholder={formData.speed + ""}
                        labelPlacement="outside"
                        onChange={handleStatsChange}
                        variant="bordered"
                        defaultValue={formData.speed + ""}
                        max={300}
                        className="w-24"
                        isInvalid={formData.speed == 0 || formData.speed > 300}
                        color="secondary"
                        startContent={
                            <div className="pointer-events-none flex items-center">
                                <IoSpeedometerOutline />
                            </div>
                        }
                    />
                    {/* <label htmlFor="speed" className="block mb-2">
                        Speed:
                    </label>
                    <input
                        type="number"
                        id="speed"
                        name="speed"
                        value={formData.speed}
                        min={1}
                        max={300}
                        step={10}
                        className="border bg-slate-900 border-purple-500 rounded-md px-2 py-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        onChange={handleStatsChange}
                    /> */}
                </div>
            </div>
            <div
                className={`${
                    formData.hp <= 300 &&
                    formData.hp >= 1 &&
                    formData.attack <= 300 &&
                    formData.attack >= 1 &&
                    formData.defence <= 300 &&
                    formData.defence >= 1 &&
                    formData.speed <= 300 &&
                    formData.speed >= 1
                        ? "text-slate-500"
                        : "text-red-500"
                } text-sm mt-0 flex justify-center  items-center`}
            >
                {"* Max 300"}
            </div>
        </form>
    );
};

export default PokemonStatsForm;
