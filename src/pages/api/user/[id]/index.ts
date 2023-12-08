import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../prisma/prismaClient";

export default async function pokemonIdHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const paramId = req.query.id;
    const key = req.query.key;
    const method = req.method;
    const userUpdateData = req.body;

    if (key !== process.env.KEY) {
        res.status(401).json({ errorMessage: "Not Authorized" });
    } else {
        switch (method) {
            case "GET":
                try {
                    const userDb = await prisma.user.findUnique({
                        where: {
                            id: paramId as string,
                        },
                        include: { createdPokemon: true },
                    });
                    res.status(200).json(
                        userDb ?? { message: "User Not Found" }
                    );
                } catch (error) {
                    res.send(error);
                }
                break;
            case "DELETE":
                try {
                    const deletedUser = await prisma.user.delete({
                        where: {
                            id: paramId as string,
                        },
                    });
                    res.status(200).json({
                        message: "User Deleted succesfuly!",
                        userData: `
                    Id: ${deletedUser.id}
                    Name: ${deletedUser.name}
                    E-mail: ${deletedUser.email}`,
                    });
                } catch (error) {
                    res.send(error);
                }
                break;
            case "PUT":
                try {
                    const updatedUser = await prisma.user.update({
                        where: { id: paramId as string },
                        data: userUpdateData,
                    });
                    res.status(200).json({
                        message: "User Updated Succesfuly!",
                        userData: updatedUser,
                    });
                } catch (error) {
                    res.send(error);
                }
                break;
            default:
                res.status(405).json({
                    errorMessage:
                        "That request method is not allowed in this route. Allowed methods: GET, DELETE, PUT",
                });
        }
    }
}
