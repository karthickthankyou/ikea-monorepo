import { Module } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { OrdersResolver } from './orders.resolver'

@Module({
  providers: [OrdersResolver, OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
