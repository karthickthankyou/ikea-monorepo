import { Module } from '@nestjs/common'
import { OrderLogsService } from './order-logs.service'
import { OrderLogsResolver } from './order-logs.resolver'

@Module({
  providers: [OrderLogsResolver, OrderLogsService],
  exports: [OrderLogsService],
})
export class OrderLogsModule {}
