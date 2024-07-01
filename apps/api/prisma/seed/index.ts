import { PrismaClient } from '@prisma/client'
import { createProductDocuments } from './data/allProducts'
import { createSellerDocuments, createUserDocuments } from './data/users'

const prisma = new PrismaClient()

const deleteAll = async () => {
  await prisma.view.deleteMany()
  await prisma.support.deleteMany()
  await prisma.orderLog.deleteMany()
  await prisma.order.deleteMany()

  //   Users
  await prisma.userProduct.deleteMany()

  await prisma.product.deleteMany()
  await prisma.seller.deleteMany()
  await prisma.user.deleteMany()
}

const reset = async () => {
  await deleteAll()
}

const main = async () => {
  await reset()

  await createUserDocuments()
  await createSellerDocuments()

  await createProductDocuments()
}

main()
