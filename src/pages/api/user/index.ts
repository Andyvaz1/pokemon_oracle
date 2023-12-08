import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prismaClient";

export default async function UserHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const userData = req.body;
    const method = req.method;
    const { key } = req.query;

    ///Authorization condition ///////
    if (key !== process.env.KEY) {
        res.status(401).json({ errorMessage: "Not Authorized" });
    } else
        switch (method) {
            case "GET":
                try {
                    const allUsers = await prisma.user.findMany({
                        include: { createdPokemon: true },
                    });
                    res.send(allUsers);
                } catch (error) {
                    res.send(error);
                }
                break;

            case "POST":
                try {
                    const newUser = await prisma.user.create({
                        data: {
                            name: userData.name,
                            image: userData.image,
                            email: userData.email,
                        },
                    });

                    res.json({
                        message: "User created succesfuly!",
                        userData: {
                            id: newUser.id,
                            name: newUser.name,
                            email: newUser.email,
                        },
                    });
                } catch (error) {
                    res.send(error);
                }
                break;

            default:
                res.status(405).json({
                    errorMessage:
                        "That request method is not allowed in this route. Allowed methods: GET, POST",
                });
        }
}
