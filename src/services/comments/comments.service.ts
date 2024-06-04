import { Injectable } from '@nestjs/common';
import { Comments } from 'src/entities/comments/comments.entiti';
import { CommentsRepository } from 'src/repositories/comments/comments.repositories';


@Injectable()
export class CommentService {
    constructor(private readonly commentsRepository: CommentsRepository) {}

    // Servicio para crear un comentario
    async createComment(commentData: Partial<Comments>): Promise<Comments> {
        return this.commentsRepository.createComment(commentData);
    }

    // Servicio para obtener todos los comentarios
    async findAllComments(): Promise<Comments[]> {
        return this.commentsRepository.getAllComments();
    }

    // Servicio para obtener un comentario por ID
    async findCommentById(id: number): Promise<Comments> {
        return this.commentsRepository.getCommentById(id);
    }

    // Servicio para actualizar un comentario
    async updateComment(id: number, commentData: Partial<Comments>): Promise<Comments> {
        return this.commentsRepository.updateComment(id, commentData);
    }

    // Servicio para eliminar un comentario
    async deleteComment(id: number): Promise<void> {
        return this.commentsRepository.deleteComment(id);
    }
}
