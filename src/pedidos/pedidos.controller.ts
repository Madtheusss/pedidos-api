import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { Pedido } from './pedido.entity';

@Controller('pedidos')
export class PedidosController {
  constructor(private pedidosService: PedidosService) {}

  @Post()
  criar(@Body() pedido: Partial<Pedido>) {
    return this.pedidosService.criarPedido(pedido);
  }

  @Get()
  listar() {
    return this.pedidosService.listarPedidos();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: number) {
    return this.pedidosService.buscarPorId(id);
  }

  @Put(':id')
  atualizar(@Param('id') id: number, @Body() pedido: Partial<Pedido>) {
    return this.pedidosService.atualizarPedido(id, pedido);
  }

  @Delete(':id')
  deletar(@Param('id') id: number) {
    return this.pedidosService.deletarPedido(id);
  }
}
