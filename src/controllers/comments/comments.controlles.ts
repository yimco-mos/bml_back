import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Comments } from 'src/entities/comments/comments.entiti';
import { CommentService } from 'src/services/comments/comments.service';

// Controlador de comentarios
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentService: CommentService) {}

  @Post('create')
  async createComment(@Body() commentData: Partial<Comments>): Promise<Comments> {
    return this.commentService.createComment(commentData);
  }

  // Función para obtener todos los comentarios
  @Get('comments')
  async getAllComments(): Promise<Comments[]> {
    return await this.commentService.findAllComments();
  }

  // Función para obtener un comentario por ID
  @Get(':id')
  async getCommentById(@Param('id', ParseIntPipe) id: number): Promise<Comments> {
    return await this.commentService.findCommentById(id);
  }

  // Función para actualizar un comentario por ID
  @Patch(':id')
  async updateComment(@Param('id', ParseIntPipe) id: number, @Body() commentData: Partial<Comments>): Promise<Comments> {
    return await this.commentService.updateComment(id, commentData);
  }

  // Función para eliminar un comentario por ID
  @Delete(':id')
  async deleteComment(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.commentService.deleteComment(id);
  }
}
