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
      url:process.env.POSTGRES_PRISMA_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      };
  }
}
