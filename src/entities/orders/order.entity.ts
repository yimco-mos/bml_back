import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';

//entidad para pedidos

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  description: string;

  @Column()
  sent_date: Date;

  @Column()
  receive_date: Date;

  @Column()
  price: number;

  @Column()
  receiver_name: string;

  @Column()
  receiver_identify: string;

  @Column()
  client_id: string;

  @Column()
  delivery_id: string
}
