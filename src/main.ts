import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('JWT_SECRET carregado:', process.env.JWT_SECRET);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
