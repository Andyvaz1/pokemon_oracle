import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Skeleton,
} from "@nextui-org/react";

const CardSkeleton = () => {
    return (
        <Card className=" mx-10 sm:mx-0 sm:min-w-[35%]" radius="lg">
            <CardHeader className="flex justify-center">
                <Skeleton className="w-[60%]  rounded-lg">
                    <div className="h-4 w-[25%] rounded-lg bg-default-200"></div>
                </Skeleton>
            </CardHeader>
            <CardBody>
                <Skeleton className="rounded-lg h-[280px]">
                    <div className="rounded-lg bg-default-300"></div>
                </Skeleton>
            </CardBody>

            <CardFooter className="flex justify-center">
                <div>
                    <Skeleton className="flex rounded-full w-20 h-20" />
                </div>
            </CardFooter>
        </Card>
    );
};
export default CardSkeleton;
