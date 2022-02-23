import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(process.env.SERVER_PORT || 4000);
  console.log("SERVER ON - IN PORT: ", AppModule.port);
}
bootstrap();
