import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { User } from 'src/entities/user/user.entity';

//archivo que contiene logica de 
//controller de user

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //funcion para crear usuarios
  @Post('create')
  async createUser(
    @Body('name') name: string,
    @Body('subname') subname: string,
    @Body('email') email: string,
    @Body('favorites') favorites: string,
    @Body('metadatauser') metadatauser: { address: string; phone: number; identification: string }
  ): Promise<User> {
    return this.userService.createUser(name, subname, email, favorites, metadatauser);
  }

  //get de users
  @Get('users')
  async findUsers(): Promise<User[]> {
    return this.userService.findUsers();
  }
}
