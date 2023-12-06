import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

export default async function UserHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const prisma = new PrismaClient()
    const userData = req.body
    const method = req.method
    const { key } = req.query

    ///Authorization condition ///////
    if (key !== process.env.KEY) {
        res.status(401).send("Not authorized.")
    } else
        switch (method) {
            case "GET":
                try {
                    const allUsers = await prisma.user.findMany()
                    res.send(allUsers)
                } catch (error) {
                    res.send(error)
                }
                break

            case "POST":
                try {
                    const createUser = await prisma.user.create({
                        data: {
                            name: userData.name,
                            image: userData.image,
                            email: userData.email,
                        },
                    })

                    res.send(`User registered succesfuly! 
    Id: ${createUser.id}
    Name: ${createUser.name}
    E-mail: ${createUser.email}
                            `)
                } catch (error) {
                    res.send(error)
                }
                break
            default:
                res.status(405).json({
                    errorMessage:
                        "That request method is not allowed in this route. Allowed methods: GET, POST",
                })
        }
}
