import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user/user.entity';
import { MetaDataUser } from 'src/entities/user/metadata_user.entity';
import { UserService } from 'src/services/user/user.service';
import { UserController } from 'src/controllers/user/user.controller';
import { UserRepository } from 'src/repositories/user/user.repositories';

//las dos entidades necesarias para este modulo son user y metadatauser

@Module({
  imports: [TypeOrmModule.forFeature([User, MetaDataUser])],
  providers: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
