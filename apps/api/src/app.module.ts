import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FirebaseModule } from './common/firebase/firebase.module'
import { PrismaModule } from './common/prisma/prisma.module'
import { AuthModule } from './models/auth/auth.module'
import { OrderLogsModule } from './models/order-logs/order-logs.module'
import { OrdersModule } from './models/orders/orders.module'
import { ProductsModule } from './models/products/products.module'
import { SellersModule } from './models/sellers/sellers.module'
import { SupportsModule } from './models/supports/supports.module'
import { UserProductsModule } from './models/user-products/user-products.module'
import { UsersModule } from './models/users/users.module'
import { ViewsModule } from './models/views/views.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      //   introspection: true,
    }),

    PrismaModule,
    FirebaseModule,

    AuthModule,

    UsersModule,
    SellersModule,
    ProductsModule,
    UserProductsModule,
    OrdersModule,
    OrderLogsModule,
    ViewsModule,
    SupportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
