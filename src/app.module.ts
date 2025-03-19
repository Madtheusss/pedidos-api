import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosModule } from './pedidos/pedidos.module';
import { Pedido } from './pedidos/pedido.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'apiPedidos',
      password: 'admin',
      database: 'restDB',
      entities: [Pedido],
      synchronize: true, 
    }),
    PedidosModule,
  ],
})
export class AppModule {}
