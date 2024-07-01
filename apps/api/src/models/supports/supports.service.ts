import { Injectable } from '@nestjs/common'
import { FindManySupportArgs, FindUniqueSupportArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateSupportInput } from './dto/create-support.input'
import { UpdateSupportInput } from './dto/update-support.input'

@Injectable()
export class SupportsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSupportInput: CreateSupportInput) {
    return this.prisma.support.create({
      data: createSupportInput,
    })
  }

  findAll(args: FindManySupportArgs) {
    return this.prisma.support.findMany(args)
  }

  findOne(args: FindUniqueSupportArgs) {
    return this.prisma.support.findUnique(args)
  }

  update(updateSupportInput: UpdateSupportInput) {
    const { id, ...data } = updateSupportInput
    return this.prisma.support.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueSupportArgs) {
    return this.prisma.support.delete(args)
  }
}
