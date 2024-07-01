import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  //   app.enableCors({
  //     origin: ['https://studio.apollographql.com', 'http://localhost:3001'],
  //     methods: '*',
  //     allowedHeaders: '*',
  //     // Content-Type, Accept, Authorization
  //     credentials: true,
  //   })
  await app.listen(3001)
}
bootstrap()
