import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Entities } from './entities';

//usamos un createtypeormoption() de tipo typeormmoduleoption
//para poder pasar las variables de la la db, toda la configuracion 
//está en este archivo


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      };
  }
}
