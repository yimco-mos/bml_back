import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user/user.entity';
import { MetaDataUser } from 'src/entities/user/metadata_user.entity';
import { InjectRepository } from '@nestjs/typeorm';

//archivo repository para user
//importamos las entidades metadatauser y user 


@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(MetaDataUser)
    private readonly metaDataUserRepository: Repository<MetaDataUser>,
  ) {}

  //funcion para crear un usuario
  async createUser(
    name: string,
    subname: string,
    email: string,
    favorites: string,
    meta_data_user: { address: string; phone: number; identification: string }
  ): Promise<User> {
    const user = new User();
    user.name = name;
    user.subname = subname;
    user.email = email;
    user.favorites = favorites;

    const userMetadata = new MetaDataUser();
    userMetadata.address = meta_data_user.address;
    userMetadata.phone = meta_data_user.phone;
    userMetadata.identification = meta_data_user.identification;

    await this.metaDataUserRepository.save(userMetadata);
    user.meta_data_user = userMetadata;

    return this.userRepository.save(user);
  }

  //funcion para el get de los user
  async findUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
