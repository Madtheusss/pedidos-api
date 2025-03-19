import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cliente: string;

  @Column()
  produto: string;

  @Column('decimal')
  valor: number;

  @Column({ default: 'pendente' }) // status do pedido
  status: string;

  @CreateDateColumn()
  criadoEm: Date;
}
