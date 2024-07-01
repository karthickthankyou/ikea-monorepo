import { Injectable } from '@nestjs/common'
import {
  FindManyUserProductArgs,
  FindUniqueUserProductArgs,
} from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateUserProductInput } from './dto/create-user-product.input'
import { UpdateUserProductInput } from './dto/update-user-product.input'

@Injectable()
export class UserProductsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserProductInput: CreateUserProductInput) {
    const { pid, uid } = createUserProductInput
    return this.prisma.userProduct.upsert({
      where: { uid_pid: { pid, uid } },
      create: createUserProductInput,
      update: createUserProductInput,
    })
  }

  findAll(args: FindManyUserProductArgs) {
    return this.prisma.userProduct.findMany(args)
  }

  findOne(args: FindUniqueUserProductArgs) {
    return this.prisma.userProduct.findUnique(args)
  }

  update(updateUserProductInput: UpdateUserProductInput) {
    const { id, ...data } = updateUserProductInput
    return this.prisma.userProduct.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueUserProductArgs) {
    return this.prisma.userProduct.delete(args)
  }
}
