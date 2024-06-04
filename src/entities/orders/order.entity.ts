import { Entity, Column, PrimaryGeneratedColumn,} from 'typeorm';

//entidad para pedidos

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  //direccion
  @Column()
  address: string;
  
  //descripcion direccion
  @Column()
  description: string;
  
  //fecha enviado
  @Column()
  sent_date: Date;
  
  //fecha recibido
  @Column({ nullable: true })
  receive_date: Date;
  
  //precio por envio
  @Column({ nullable: true })
  price: number;
  //nombre de quien recibe 
  @Column()
  receiver_name: string;

  //identid¿ficacion de quien recibe 
  @Column()
  receiver_identify: string;

  //id generado por la web de quien hace el pedido cuyo caso esta registrado
  @Column()
  client_id: string;

  //id del delivery que acepta el pedido
  @Column()
  delivery_id: string;
  
  //ususario que hace el pedido
  @Column()
  send_user: string;
  
  //estado para saber si alguien recibio el pedio
  @Column({ nullable: true })
  pendding: boolean | null;
}
