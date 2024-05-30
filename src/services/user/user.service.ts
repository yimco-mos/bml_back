import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user/user.repositories';
import { User } from 'src/entities/user/user.entity';

  //este archivo contiene la logica 
  //para el services de los usuarios
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  //funcion para crear usuarios que
  //ya esta relacionada desde el repository
  async createUser(
    name: string,
    subname: string,
    email: string,
    favorites: string,
    metadatauser: { address: string; phone: number; identification: string }
  ): Promise<User> {
    return this.userRepository.createUser(name, subname, email, favorites, metadatauser);
  }

  //funcion para el get de los users
  async findUsers(): Promise<User[]> {
    return this.userRepository.findUsers();
  }
}
