import { Injectable } from '@nestjs/common'
import { FindManyOrderLogArgs, FindUniqueOrderLogArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateOrderLogInput } from './dto/create-order-log.input'
import { UpdateOrderLogInput } from './dto/update-order-log.input'

@Injectable()
export class OrderLogsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOrderLogInput: CreateOrderLogInput) {
    return this.prisma.orderLog.create({
      data: createOrderLogInput,
    })
  }

  findAll(args: FindManyOrderLogArgs) {
    return this.prisma.orderLog.findMany(args)
  }

  findOne(args: FindUniqueOrderLogArgs) {
    return this.prisma.orderLog.findUnique(args)
  }

  update(updateOrderLogInput: UpdateOrderLogInput) {
    const { id, ...data } = updateOrderLogInput
    return this.prisma.orderLog.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueOrderLogArgs) {
    return this.prisma.orderLog.delete(args)
  }
}
