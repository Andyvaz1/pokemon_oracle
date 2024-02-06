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
        <Card className=" min-h-fit min-w-fit" radius="lg">
            <CardHeader className="flex justify-center min-h-[20%] min-w-[100%]">
                <Skeleton className="w-[60%]  rounded-lg ">
                    <div className="h-4 w-[25%] rounded-lg bg-default-200 "></div>
                </Skeleton>
            </CardHeader>
            <CardBody className="flex-row justify-center">
                <Skeleton className=" rounded-lg flex justify-center  ">
                    <div className="rounded-lg w-[180px] h-[180px] rounded-lg sm:w-[260px] sm:h-[260px] sm:max-w-[260px] sm:max-h-[260px] "></div>
                </Skeleton>
            </CardBody>

            <CardFooter className="flex justify-center flex justify-center">
                <Skeleton className="flex rounded-full my-4 mx-2">
                    <Avatar
                        alt={"typeLoader"}
                        isBordered
                        color="default"
                        className=""
                        size="lg"
                    />
                </Skeleton>
            </CardFooter>
        </Card>
    );
};
export default CardSkeleton;
