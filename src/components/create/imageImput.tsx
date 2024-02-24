import { Form } from "@/types/types";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { ChangeEvent } from "react";
import { PiUploadSimpleBold } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";

interface ImageInputProps {
    formData: Form;
    setFormData: (formData: Form) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ formData, setFormData }) => {
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-8 relative">
            {/* <input
                className="block w-[80vw] sm:w-[300px] text-sm   file:cursor-pointer
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-purple-500 file:text-white
                hover:file:bg-white
                hover:file:text-purple-500 "
                id="file_input"
                type="file"
                onChange={handleImageChange}
                accept="image/*"
            /> */}
            {formData?.image ? (
                <RiDeleteBin6Line
                    size={30}
                    className="text-slate-500 hover:text-red-500 cursor-pointer top-0 right-0 absolute"
                    onClick={() => setFormData({ ...formData, image: "" })}
                ></RiDeleteBin6Line>
            ) : (
                <></>
            )}

            {formData?.image ? (
                <div className="flex items-center justify-center w-[260px] h-[260px]  sm:h-[300px]  my-6   ">
                    <Image
                        src={formData?.image}
                        width={475}
                        height={475}
                        alt="Selected Image"
                        className="size-full p-8"
                    />
                </div>
            ) : (
                <div className="flex items-center justify-center w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] my-6">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2
                         border-gray-300 border-dashed rounded-lg 
                        cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-slate-700/40 
                        hover:bg-gray-100 dark:border-gray-600 
                        dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {/* <svg
                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg> */}
                            <PiUploadSimpleBold className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                    Click to upload
                                </span>
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG 1:1 (MAX. 800x800px)
                            </p>
                        </div>
                        <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            onChange={handleImageChange}
                            accept="image/png, image/jpg, image/svg"
                        />
                    </label>
                </div>
            )}

            {/* {selectedImage ? (
                <Image
                    src={selectedImage}
                    width={260}
                    height={260}
                    alt="Selected Image"
                />
            ) : (
                <Image src={folder} alt="uploadImg" width={260} height={260} />
            )} */}
        </div>
    );
};

export default ImageInput;
