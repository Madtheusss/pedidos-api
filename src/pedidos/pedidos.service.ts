import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidosRepository: Repository<Pedido>,
  ) {}

  async criarPedido(pedido: Partial<Pedido>): Promise<Pedido> {
    return this.pedidosRepository.save(pedido);
  }

  async listarPedidos(): Promise<Pedido[]> {
    return this.pedidosRepository.find();
  }

  async buscarPorId(id: number): Promise<Pedido> {
    const pedido = await this.pedidosRepository.findOneBy({ id });
    if (!pedido) {
      throw new Error(`Pedido with id ${id} not found`);
    }
    return pedido;
  }

  async atualizarPedido(id: number, pedido: Partial<Pedido>): Promise<void> {
    await this.pedidosRepository.update(id, pedido);
  }

  async deletarPedido(id: number): Promise<void> {
    await this.pedidosRepository.delete(id);
  }
}
