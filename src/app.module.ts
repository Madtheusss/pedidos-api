import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { Pedido } from './pedidos/pedido.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST ||'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'admin',
      password: process.env.DB_PASSWORD || 'admin',
      database: process.env.DB_NAME || 'lojadb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
      autoLoadEntities: true,
    }),
    AuthModule,
    PedidosModule,
  ],
})
export class AppModule {}
