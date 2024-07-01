import { Module } from '@nestjs/common'
import { SupportsService } from './supports.service'
import { SupportsResolver } from './supports.resolver'

@Module({
  providers: [SupportsResolver, SupportsService],
  exports: [SupportsService],
})
export class SupportsModule {}
