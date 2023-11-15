import { categories } from "./data/category";
import { products } from "./data/product";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () : Promise<void> => {
    try {
        await prisma.category.createMany({
            data: categories
        })
        await prisma.product.createMany({
            data: products
        })
    } catch (err) {
        console.log(err)
    }
}

main()