import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';


//metadata con informacion adicional del usuario

@Entity()
export class MetaDataUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    phone: number;

    @Column()
    identification: string;

   
    @OneToOne(() => User, user => user.meta_data_user)
    @JoinColumn({ name: 'user_id' }) 
    user: User;
}
