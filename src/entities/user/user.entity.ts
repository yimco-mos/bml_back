import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { MetaDataUser } from './metadata_user.entity';

//entidad principal del usuario 
//falta hacer relacion para contar la cantidad de sus pedidos
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    subname: string;

    @Column()
    email: string;

    @Column({ default: '' })
    favorites: string;

    @OneToOne(() => MetaDataUser, meta_data_user => meta_data_user.user, { cascade: true })
    @JoinColumn()
    meta_data_user: MetaDataUser;

  
}
