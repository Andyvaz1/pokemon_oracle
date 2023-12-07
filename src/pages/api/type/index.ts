import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { typeImgList } from "@/utils/dictionaries";

const prisma = new PrismaClient();
const urlTypes = "https://pokeapi.co/api/v2/type";

export default async function typeHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const method = req.method;
    const key = req.query.key;

    switch (method) {
        case "GET":
            try {
                const allTypes = await prisma.type.findMany();
                res.status(200).send(allTypes);
            } catch (error) {
                res.send(error);
            }
            break;
        case "POST":
            if (key !== process.env.KEY) {
                res.status(401).send("Not authorized.");
            } else {
                try {
                    const apiRquest = await axios(urlTypes);
                    const apiTypeList = apiRquest.data.results;
                    const createAllTypes = await prisma.type.createMany({
                        data: apiTypeList,
                    });
                    res.status(200).send(createAllTypes);
                } catch (error) {
                    res.send(error);
                }
            }
            break;
        case "PUT":
            if (key !== process.env.KEY) {
                res.status(401).send("Not authorized.");
            } else {
                try {
                    const updatedTypes = typeImgList.map(async (type) => {
                        const updatedType = await prisma.type.update({
                            where: { name: type.name },
                            data: {
                                image: type.image,
                            },
                        });
                        return updatedType;
                    });
                    res.status(200).send(updatedTypes);
                } catch (error) {
                    res.send(error);
                }
            }
            break;
        default:
            res.status(405).json({
                errorMessage:
                    "That request method is not allowed in this route. Allowed methods: GET, POST",
            });
    }
}
