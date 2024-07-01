import { Module } from '@nestjs/common'
import { UserProductsService } from './user-products.service'
import { UserProductsResolver } from './user-products.resolver'

@Module({
  providers: [UserProductsResolver, UserProductsService],
  exports: [UserProductsService],
})
export class UserProductsModule {}
