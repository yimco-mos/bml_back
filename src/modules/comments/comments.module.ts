import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentsController } from "src/controllers/comments/comments.controlles";
import { Comments } from "src/entities/comments/comments.entiti";
import { CommentsRepository } from "src/repositories/comments/comments.repositories";
import { CommentService } from "src/services/comments/comments.service";



@Module({
    imports:[TypeOrmModule.forFeature([Comments])],
    providers:[CommentService,CommentsRepository],
    controllers:[CommentsController],
})

export class commentsModule{}