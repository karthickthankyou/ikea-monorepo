import { Injectable } from '@nestjs/common'
import { FindManyProductArgs, FindUniqueProductArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateProductInput } from './dto/create-product.input'
import { UpdateProductInput } from './dto/update-product.input'

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductInput: CreateProductInput) {
    return this.prisma.product.create({
      data: createProductInput,
    })
  }

  findAll(args: FindManyProductArgs) {
    return this.prisma.product.findMany(args)
  }

  findOne(args: FindUniqueProductArgs) {
    return this.prisma.product.findUnique(args)
  }

  update(updateProductInput: UpdateProductInput) {
    const { id, ...data } = updateProductInput
    return this.prisma.product.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueProductArgs) {
    return this.prisma.product.delete(args)
  }
}
