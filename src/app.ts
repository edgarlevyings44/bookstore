import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const app = express()
const port: number = 3000;

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@example.com',
  //     posts: {
  //       create: { title: 'Hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' },
  //     },
  //   },
  // })

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // })
  // console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

app.get('/', (req: Request, res: Response) => {
  res.send('Server Running!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})