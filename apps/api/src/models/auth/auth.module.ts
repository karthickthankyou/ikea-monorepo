import { forwardRef, Global, Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { UsersModule } from '../users/users.module'

@Global()
@Module({
  imports: [forwardRef(() => UsersModule)],
  providers: [AuthResolver, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
