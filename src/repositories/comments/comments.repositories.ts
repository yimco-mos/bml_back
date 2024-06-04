import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from 'src/entities/comments/comments.entiti';
import { Repository } from 'typeorm';


@Injectable()
export class CommentsRepository {
    constructor(
        @InjectRepository(Comments)
        private readonly commentRepository: Repository<Comments>,
    ) { }

    // Función para crear un comentario
    async createComment(commentData: Partial<Comments>): Promise<Comments> {
        const comment = this.commentRepository.create(commentData);
        return await this.commentRepository.save(comment);
    }

    // Función para obtener todos los comentarios
    async getAllComments(): Promise<Comments[]> {
        return await this.commentRepository.find();
    }

    // Función para obtener un comentario por ID
    async getCommentById(id: number): Promise<Comments> {
        return await this.commentRepository.findOne({ where: { id } });
    }

    // Función para actualizar un comentario
    async updateComment(id: number, commentData: Partial<Comments>): Promise<Comments> {
        await this.commentRepository.update(id, commentData);
        return await this.commentRepository.findOne({ where: { id } });
    }

    // Función para eliminar un comentario
    async deleteComment(id: number): Promise<void> {
        await this.commentRepository.delete(id);
    }
}
