import {
    Avatar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Skeleton,
} from "@nextui-org/react";

const CardSkeleton = () => {
    return (
        <Card className=" min-h-fit min-w-fit bg-slate-900/40" radius="lg">
            <CardHeader className="flex justify-center min-h-[20%] min-w-[100%]">
                <Skeleton className="w-[60%]  rounded-lg ">
                    <div className="h-4 w-[25%] rounded-lg bg-default-200 ">
                        <h2
                            className={
                                "text-slate-500 min-[380px]:text-[25px] min-[380px]:p-0 md:text-[30px] p-2"
                            }
                        >
                            holi
                        </h2>
                    </div>
                </Skeleton>
            </CardHeader>
            <CardBody className="flex-row justify-center">
                <Skeleton className=" rounded-lg flex justify-center  ">
                    <div className=" max-[380px]:h-[180px] max-[380px]:w-[180px] rounded-lg h-[200px] w-[200px]  rounded-lg sm:w-[260px] sm:h-[260px]  "></div>
                </Skeleton>
            </CardBody>

            <CardFooter className="flex justify-center flex justify-center">
                <Skeleton className="flex rounded-full my-4 mx-2">
                    <Avatar
                        alt={"typeLoader"}
                        isBordered
                        color="default"
                        className="h-[56px]"
                        size="lg"
                    />
                </Skeleton>
            </CardFooter>
        </Card>
    );
};
export default CardSkeleton;
