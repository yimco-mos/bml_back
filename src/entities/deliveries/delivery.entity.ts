import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { MetaDataDelivery } from './meta_data_delivery.entity';
import { IsInt, Max, Min } from 'class-validator';

//entidad principal del delivery usa metataada
//para guardar informacion adicional
@Entity()
export class Delivery {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    subname: string;

    @Column({ default: 0 })
    active: number;

    @Column('text')
    vehicle_descrip: string;

    @Column({ type: 'date' })
    income: Date;

    @OneToOne(() => MetaDataDelivery, meta_data_delivery => meta_data_delivery.delivery, { cascade: true })
    @JoinColumn()
    meta_data_delivery: MetaDataDelivery;

    @Column()
    @IsInt()
    @Min(1)
    @Max(5)
    rating: number;

    @Column('json', { nullable: true })
    comment: {
        text: string;
        client_id: string;
    };

    @BeforeInsert()
    @BeforeUpdate()
    validation() {
        if (this.rating < 1 || this.rating > 5) {
            throw new Error('La calificación debe ser entre 1 y 5');
        }
    }
}
