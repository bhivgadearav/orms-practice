import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // Write Prisma client queries here
    const users = await prisma.user.findMany()
    console.log(users)
}

main()
.catch(e => {
    console.log(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})