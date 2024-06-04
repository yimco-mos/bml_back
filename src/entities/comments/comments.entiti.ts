import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    us_name: string;

    @Column({ type: 'text' })
    comment: string;

    @Column()
    rating: number;

    @BeforeUpdate()
    @BeforeInsert()
    validateRating() {
        if (this.rating > 5 || this.rating < 1) {
            throw new Error('La calificación debe ser entre 1 y 5');
        }
    }
}
