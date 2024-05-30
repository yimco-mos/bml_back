import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Delivery } from './delivery.entity';


//entidad meadata para informacion adicional del delivery
@Entity()
export class MetaDataDelivery {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    phone: number;

    @Column()
    identification: string;

    @Column()
    address: string;

    @Column()
    email: string;

    @Column()
    birthday: string;

    @Column()
    gender: string;

    @Column()
    image: string;

    @OneToOne(() => Delivery, delivery => delivery.meta_data_delivery)
    @JoinColumn({ name: 'delivery_id' }) 
    delivery: MetaDataDelivery;
}
